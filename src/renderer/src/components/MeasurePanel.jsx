import { useContext, useEffect, useState } from 'react';
import { Dimensions } from '../lib/FluidNC/Constants';
import { Context } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Input from './Input';
import Spacer from '../util/Spacer';
import * as Probe from '../lib/probe';
import * as Storage from '../util/storage';

import Left from '../assets/img/arrow-left.svg';
import Right from '../assets/img/arrow-right.svg';
import Up from '../assets/img/arrow-up.svg';
import Down from '../assets/img/arrow-down.svg';

const TouchProbe = Dimensions.TouchProbe;

const StorageNames = {
    NumOfCycles: 'measurePanel/numOfCycles',
    ToolDiameter: 'measurePanel/probeDiameter'
};

const THStyle = {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 28,
};

const TDStyle = {
    width: 170
};

export default function MeasurePanel({ show, onClose }) {

    const { probeResults } = useContext(Context);

    const [measurements, setMeasurements] = useState([]);
    const [xDirection, setXDirection] = useState(1);
    const [yDirection, setYDirection] = useState(1);
    const [numOfCycles, setNumOfCycles] = useState(1);
    const [newResult, setNewResult] = useState(false);

    const dLeft = -1;
    const dRight = 1;
    const dUp = 1;
    const dDown = -1;

    useEffect(() => setNewResult(true), [probeResults]);

    const waitForResult = () => {
        return new Promise(resolve => {
            const checkResult = () => {
                if (newResult) {
                    setNewResult(false);
                    resolve();
                } else {
                    setTimeout(checkResult, 500);
                }
            };
            checkResult();
        });
    };

    const runMeasurement = async (callback, direction, axis) => {
        const results = [];

        for (let i = 0; i < numOfCycles; i++) {
            callback(0, TouchProbe.diameter, direction);
            await waitForResult();

            results.push(probeResults[0]);
        }

        const avgPosition = results.reduce((sum, result) => sum + result[axis], 0) / results.length;
        const measurement = measurements[0] && measurements[0].axis === axis
            ? Math.abs(measurements[0].position - avgPosition).toFixed(3)
            : undefined;

        setMeasurements(prev => [{ axis, position: avgPosition, fromLastPosition: measurement }, ...prev]);
    };

    const axisButtons = [
        [
            { label: 'X', onClick: () => runMeasurement(Probe.measureX, xDirection, 'x') },
            { spacer: true },
            { icon: Left, onClick: () => setXDirection(dLeft), variant: xDirection === dLeft ? 'info' : '' },
            { icon: Right, onClick: () => setXDirection(dRight), variant: xDirection === dRight ? 'info' : '' }
        ],
        [
            { label: 'Y', onClick: () => runMeasurement(Probe.measureY, yDirection, 'y') },
            { spacer: true },
            { icon: Up, onClick: () => setYDirection(dUp), variant: yDirection === dUp ? 'info' : '' },
            { icon: Down, onClick: () => setYDirection(dDown), variant: yDirection === dDown ? 'info' : '' }
        ],
        [
            { label: 'Z', onClick: () => runMeasurement(Probe.measureZ, dDown, 'z') },
            { spacer: true },
            { _blank: true },
            { icon: Down, variant: 'info' }
        ]
    ];

    return (
        <Modal show={show} onClose={onClose}>
            <div className='flex-row'>
                <div>
                    {axisButtons.map((row, key) => (
                        <div key={key} className='flex-row'>
                            {row.map((button, index) => button.spacer
                                ? (<Spacer key={index} x={button.x || 0.2} vLine />)
                                : (
                                    <Grid key={index}>
                                        {button._blank ? null : (
                                            <Button label={button.label} icon={button.icon} onClick={button.onClick} variant={button.variant} bold bufferClick />
                                        )}
                                    </Grid>
                                ))}
                        </div>
                    ))}

                    <Spacer y={0.2} x={3.2} hLine />

                    <div className='flex-row'>
                        <Input
                            labelSize='xxs'
                            inputWidth={2.2}
                            label='Cycles'
                            value={numOfCycles}
                            onChange={value => value !== undefined && Storage.setStateAndSave(value, setNumOfCycles, StorageNames.NumOfCycles)}
                        />
                    </div>
                </div>
                {measurements.length > 0 && (
                    <>
                        <Spacer vLine x={0.2} y={4.2} />
                        <Grid x={6} y={4.2} style={{ justifyContent: 'flex-start', alignItems: 'start', overflow: 'scroll', fontSize: '1.2rem' }}>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={THStyle}>Axis</th>
                                        <th style={THStyle}>Position</th>
                                        <th style={THStyle}>Measurement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {measurements.map((measurement, i) => (
                                        <tr key={i}>
                                            <td style={TDStyle}>{measurement.axis.toUpperCase()}</td>
                                            <td style={TDStyle}>{measurement.position}</td>
                                            <td style={TDStyle}>{
                                                measurement.fromLastPosition === undefined
                                                    ? ' - '
                                                    : `${measurement.fromLastPosition}mm`
                                            }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Grid>
                    </>
                )}
            </div>
        </Modal >
    );
}