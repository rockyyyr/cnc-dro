import { useState, useContext, useEffect } from 'react';
import { Context } from '../lib/FluidNC';
import { Dimensions, Directions } from '../lib/FluidNC/Constants';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Input from './Input';
import { probeZ, probeXY, probeX, probeY } from '../lib/probe';
import Spacer from '../util/Spacer';
import * as Storage from '../util/storage';

import Left from '../assets/img/arrow-left.svg';
import Right from '../assets/img/arrow-right.svg';
import Up from '../assets/img/arrow-up.svg';
import Down from '../assets/img/arrow-down.svg';
// import TouchProbe from '../assets/img/touchprobe.svg';
// import TouchPlate from '../assets/img/touchplate.svg';
// import ToolSetter from '../assets/img/tool-setter.svg';

import Success from '../assets/img/check.svg';
import Failed from '../assets/img/cancel.svg';

const StorageNames = {
    ProbeHeight: 'probePanel/probeHeight',
    ToolDiameter: 'probePanel/toolDiameter',
};

const THStyle = {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 28,
};

const TDStyle = {
    width: 170
};

export default function ProbePanel({ show, onClose }) {
    const { probeResults } = useContext(Context);
    const [probeHeight, setProbeHeight] = useState(Dimensions.TouchProbe.height);
    const [toolDiameter, setToolDiameter] = useState(Dimensions.TouchProbe.diameter);
    const [xDirection, setXDirection] = useState(Directions.Right);
    const [yDirection, setYDirection] = useState(Directions.Up);
    // const [touchPlatePresetActive, setTouchPlatePresetActive] = useState(false);
    // const [touchProbePresetActive, setTouchProbePresetActive] = useState(false);

    useEffect(() => {
        const savedProbeHeight = localStorage.getItem(StorageNames.ProbeHeight);
        const savedToolDiameter = localStorage.getItem(StorageNames.ToolDiameter);

        if (savedProbeHeight) {
            setProbeHeight(parseFloat(savedProbeHeight));
        }

        if (savedToolDiameter) {
            setToolDiameter(parseFloat(savedToolDiameter));
        }
    }, []);

    const runProbeZ = () => probeZ(probeHeight);
    const runProbeXY = () => probeXY(toolDiameter, { x: xDirection, y: yDirection });
    const runProbeX = () => probeX(toolDiameter, xDirection);
    const runProbeY = () => probeY(toolDiameter, yDirection);

    // const presetTouchProbe = () => {
    //     const { width, height, diameter } = Dimensions.TouchProbe;
    //     setProbeHeight(height);
    //     setProbeWidth(width);
    //     setToolDiameter(diameter);
    //     setTouchPlatePresetActive(false);
    //     setTouchProbePresetActive(true);
    // };

    // const presetTouchPlate = () => {
    //     const { width, height, diameter } = Dimensions.TouchPlate;
    //     setProbeHeight(height);
    //     setProbeWidth(width);
    //     setToolDiameter(diameter);
    //     setTouchPlatePresetActive(true);
    //     setTouchProbePresetActive(false);
    // };

    // const deactivatePresets = () => {
    //     setTouchProbePresetActive(false);
    //     setTouchPlatePresetActive(false);
    // };

    const directions = [
        { icon: Left, onClick: () => setXDirection(Directions.Left), active: xDirection === Directions.Left },
        { icon: Right, onClick: () => setXDirection(Directions.Right), active: xDirection === Directions.Right },
        { icon: Up, onClick: () => setYDirection(Directions.Up), active: yDirection === Directions.Up },
        { icon: Down, onClick: () => setYDirection(Directions.Down), active: yDirection === Directions.Down },
    ];

    const probeButtons = [
        { label: 'Z', onClick: runProbeZ },
        { label: 'XY', onClick: runProbeXY },
        { label: 'X', onClick: runProbeX },
        { label: 'Y', onClick: runProbeY },
    ];

    // const presets = [
    //     { icon: TouchProbe, onClick: presetTouchProbe, variant: 'warning', active: touchProbePresetActive },
    //     { icon: TouchPlate, onClick: presetTouchPlate, variant: 'warning', active: touchPlatePresetActive },
    // ];

    // const macros = [
    //     { _blank: true },
    //     { icon: ToolSetter, onClick: () => { }, variant: 'success' },
    // ];

    return (
        <Modal
            show={show}
            onClose={() => onClose()}
        >
            <div className="flex-row">
                <div>
                    <div className="flex-row">
                        {probeButtons.map((button, index) => (
                            <Grid key={index}>
                                <Button label={button.label} onClick={button.onClick} bold bufferClick />
                            </Grid>
                        ))}
                    </div>
                    <div className="flex-row">
                        {directions.map((button, index) => (
                            <Grid key={index}>
                                <Button icon={button.icon} onClick={button.onClick} active={button.active} />
                            </Grid>
                        ))}
                    </div>
                    {/* <Spacer y={0.2} x={4} hLine />
                    <div className="flex-row">
                        {presets.map((button, index) => (
                            <Grid key={index}>
                                <Button icon={button.icon} onClick={button.onClick} variant={button.variant} active={button.active} />
                            </Grid>
                        ))}
                        {macros.map((button, index) => (
                            <Grid key={index}>
                                {button._blank ? null : (
                                    <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                                )}
                            </Grid>
                        ))}
                    </div> */}


                    <Spacer y={0.2} x={4} hLine />

                    <div className='flex-row'>
                        <Input
                            labelSize='xxs'
                            inputWidth={1}
                            label='Probe Height'
                            value={probeHeight}
                            onChange={value => value !== undefined && Storage.setStateAndSave(value, setProbeHeight, StorageNames.ProbeHeight)}
                        />

                        <Input
                            labelSize='xxs'
                            inputWidth={1}
                            label='Tool ⌀'
                            value={toolDiameter}
                            onChange={value => value !== undefined && Storage.setStateAndSave(value, setToolDiameter, StorageNames.ToolDiameter)}
                        />
                    </div>
                </div>
                {probeResults?.length > 0 && (
                    <>
                        <Spacer y={5.2} x={0.5} vLine />
                        <Grid x={7} y={5.2} style={{ justifyContent: 'flex-start', alignItems: 'start', overflow: 'scroll', fontSize: '1.2rem' }}>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={THStyle}>X</th>
                                        <th style={THStyle}>Y</th>
                                        <th style={THStyle}>Z</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {probeResults.map((result, i) => (
                                        <tr key={i}>
                                            <td style={TDStyle}>{result.value.x}</td>
                                            <td style={TDStyle}>{result.value.y}</td>
                                            <td style={TDStyle}>{result.value.z}</td>
                                            <td>{result.success
                                                ? <img src={Success} className='success-icon' />
                                                : <img src={Failed} className='failed-icon' />
                                            }</td>
                                            {result.timestamp && (
                                                <td style={{ paddingLeft: 25 }}>{new Date(result.timestamp).toTimeString().split(' ')[0]}</td>

                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Grid>
                    </>
                )}
            </div>
        </Modal>
    );
}
