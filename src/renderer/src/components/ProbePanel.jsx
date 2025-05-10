import { useState, useContext, useEffect } from 'react';
import { Context } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Input from './Input';
import { probeZ, probeXY, probeX, probeY, probeWithTouchProbe } from '../lib/probe';
import Spacer from '../util/Spacer';

import DownLeft from '../assets/img/arrow-down-left.svg';
import DownRight from '../assets/img/arrow-down-right.svg';
import UpLeft from '../assets/img/arrow-up-left.svg';
import UpRight from '../assets/img/arrow-up-right.svg';
import TouchProbe from '../assets/img/touchprobe.svg';

const Storage = {
    ProbeHeight: 'probePanel/probeHeight',
    ProbeWidth: 'probePanel/probeWidth',
    ToolDiameter: 'probePanel/toolDiameter',
};

export default function ProbePanel({ show, onClose }) {
    const { probeResults } = useContext(Context);
    const [probeHeight, setProbeHeight] = useState(5);
    const [probeWidth, setProbeWidth] = useState(5);
    const [toolDiameter, setToolDiameter] = useState(6);
    const [probeDirection, setProbeDirection] = useState({ y: -1, x: -1, label: 'downleft' });

    useEffect(() => {
        const savedProbeHeight = localStorage.getItem(Storage.ProbeHeight);
        const savedProbeWidth = localStorage.getItem(Storage.ProbeWidth);
        const savedToolDiameter = localStorage.getItem(Storage.ToolDiameter);

        if (savedProbeHeight) {
            setProbeHeight(parseFloat(savedProbeHeight));
        }
        if (savedProbeWidth) {
            setProbeWidth(parseFloat(savedProbeWidth));
        }
        if (savedToolDiameter) {
            setToolDiameter(parseFloat(savedToolDiameter));
        }
    }, []);

    const runProbeZ = () => probeZ(probeHeight);
    const runProbeXY = () => probeXY(probeWidth, toolDiameter, probeDirection);
    const runProbeX = () => probeX(probeWidth, toolDiameter, probeDirection);
    const runProbeY = () => probeY(probeWidth, toolDiameter, probeDirection);
    const runTouchProbe = () => probeWithTouchProbe(probeDirection);

    const runAndClose = command => () => {
        command();
        onClose();
    };

    const updateAndSaveSetting = (data, command, storageName) => {
        command(data);
        localStorage.setItem(storageName, data);
    };

    const directions = [
        { icon: DownLeft, onClick: () => setProbeDirection({ y: -1, x: -1, label: 'downleft' }), variant: probeDirection?.label === 'downleft' ? 'info' : '' },
        { icon: DownRight, onClick: () => setProbeDirection({ y: -1, x: 1, label: 'downright' }), variant: probeDirection?.label === 'downright' ? 'info' : '' },
        { icon: UpLeft, onClick: () => setProbeDirection({ y: 1, x: -1, label: 'upleft' }), variant: probeDirection?.label === 'upleft' ? 'info' : '' },
        { icon: UpRight, onClick: () => setProbeDirection({ y: 1, x: 1, label: 'upright' }), variant: probeDirection?.label === 'upright' ? 'info' : '' },
    ];

    const probeButtons = [
        { label: 'Z', onClick: runAndClose(runProbeZ) },
        { label: 'XY', onClick: runAndClose(runProbeXY) },
        { label: 'X', onClick: runAndClose(runProbeX) },
        { label: 'Y', onClick: runAndClose(runProbeY) },
    ];

    const macros = [
        { icon: TouchProbe, onClick: runAndClose(runTouchProbe), variant: 'info' },
    ];

    return (
        <Modal
            show={show}
            onClose={() => onClose()}
        >
            {/* <Grid x={4}> */}
            {/* <h2 style={{ marginBottom: 10, textAlign: 'center' }}>Probe</h2> */}
            {/* </Grid> */}
            <div className="flex-row">
                <div>
                    <div className="flex-row">
                        {probeButtons.map((button, index) => (
                            <Grid key={index}>
                                <Button label={button.label} onClick={button.onClick} />
                            </Grid>
                        ))}
                    </div>
                    <div className="flex-row">
                        {macros.map((button, index) => (
                            <Grid key={index}>
                                <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                            </Grid>
                        ))}
                    </div>
                    <Spacer y={0.2} x={4} hLine />
                    <div className="flex-row">
                        {directions.map((button, index) => (
                            <Grid key={index}>
                                <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                            </Grid>
                        ))}
                    </div>

                    <div className='flex-row'>
                        <Input
                            labelSize='xs'
                            inputWidth={1}
                            label='Probe Height'
                            value={probeHeight}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setProbeHeight, Storage.ProbeHeight)}
                        />

                        <Input
                            labelSize='xs'
                            inputWidth={1}
                            label='Probe Width'
                            value={probeWidth}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setProbeWidth, Storage.ProbeWidth)}
                        />
                    </div>

                    <div className='flex-row'>
                        <Input
                            labelSize='xs'
                            inputWidth={1}
                            label='Tool ⌀'
                            value={toolDiameter}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setToolDiameter, Storage.ToolDiameter)}
                        />
                    </div>
                </div>
                {probeResults?.length > 0 && (
                    <>
                        <Spacer y={3.5} x={0.5} vLine />
                        <Grid x={3} y={3.5} style={{ justifyContent: 'flex-start', alignItems: 'start', overflow: 'scroll', fontSize: '1.2rem' }}>
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    {probeResults.map((result, i) => (
                                        <tr key={i}>
                                            <td>X: {result.value.x}</td>
                                            <td>Y: {result.value.y}</td>
                                            <td>Z: {result.value.z}</td>
                                            <td style={{ paddingLeft: 25 }}>{result.success ? 'Success' : 'Failed'}</td>
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
