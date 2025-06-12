import { useState, useContext, useEffect } from 'react';
import { Context, Constants } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Input from './Input';
import { probeZ, probeXY, probeX, probeY, probeWithToolSetter } from '../lib/probe';
import Spacer from '../util/Spacer';

import DownLeft from '../assets/img/arrow-down-left.svg';
import DownRight from '../assets/img/arrow-down-right.svg';
import UpLeft from '../assets/img/arrow-up-left.svg';
import UpRight from '../assets/img/arrow-up-right.svg';
import TouchProbe from '../assets/img/touchprobe.svg';
import TouchPlate from '../assets/img/touchplate.svg';
import ToolSetter from '../assets/img/tool-setter.svg';

import Success from '../assets/img/check.svg';
import Failed from '../assets/img/cancel.svg';

const Storage = {
    ProbeHeight: 'probePanel/probeHeight',
    ProbeWidth: 'probePanel/probeWidth',
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
    const [probeHeight, setProbeHeight] = useState(5);
    const [probeWidth, setProbeWidth] = useState(5);
    const [toolDiameter, setToolDiameter] = useState(6);
    const [probeDirection, setProbeDirection] = useState({ y: -1, x: -1, label: 'downleft' });
    const [touchPlatePresetActive, setTouchPlatePresetActive] = useState(false);
    const [touchProbePresetActive, setTouchProbePresetActive] = useState(false);

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

    const presetTouchProbe = () => {
        const { width, height, diameter } = Constants.Dimensions.TouchProbe;
        setProbeHeight(height);
        setProbeWidth(width);
        setToolDiameter(diameter);
        setTouchPlatePresetActive(false);
        setTouchProbePresetActive(true);
    };

    const presetTouchPlate = () => {
        const { width, height, diameter } = Constants.Dimensions.TouchPlate;
        setProbeHeight(height);
        setProbeWidth(width);
        setToolDiameter(diameter);
        setTouchPlatePresetActive(true);
        setTouchProbePresetActive(false);
    };

    const runToolSetter = () => probeWithToolSetter(probeDirection);

    // const runAndClose = command => () => {
    //     command();
    //     onClose();
    // };

    const updateAndSaveSetting = (data, command, storageName) => {
        command(data);
        setTouchProbePresetActive(false);
        setTouchPlatePresetActive(false);
        localStorage.setItem(storageName, data);
    };

    const directions = [
        { icon: DownLeft, onClick: () => setProbeDirection({ y: -1, x: -1, label: 'downleft' }), variant: probeDirection?.label === 'downleft' ? 'info' : '' },
        { icon: DownRight, onClick: () => setProbeDirection({ y: -1, x: 1, label: 'downright' }), variant: probeDirection?.label === 'downright' ? 'info' : '' },
        { icon: UpLeft, onClick: () => setProbeDirection({ y: 1, x: -1, label: 'upleft' }), variant: probeDirection?.label === 'upleft' ? 'info' : '' },
        { icon: UpRight, onClick: () => setProbeDirection({ y: 1, x: 1, label: 'upright' }), variant: probeDirection?.label === 'upright' ? 'info' : '' },
    ];

    const probeButtons = [
        { label: 'Z', onClick: runProbeZ },
        { label: 'XY', onClick: runProbeXY },
        { label: 'X', onClick: runProbeX },
        { label: 'Y', onClick: runProbeY },
    ];

    const presets = [
        { icon: TouchProbe, onClick: presetTouchProbe, variant: touchProbePresetActive ? 'info' : 'warning' },
        { icon: TouchPlate, onClick: presetTouchPlate, variant: touchPlatePresetActive ? 'info' : 'warning' },
    ];

    const macros = [
        { _blank: true },
        { icon: ToolSetter, onClick: runToolSetter, variant: 'success' },
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
                                <Button label={button.label} onClick={button.onClick} bold bufferClick />
                            </Grid>
                        ))}
                    </div>
                    <div className="flex-row">
                        {presets.map((button, index) => (
                            <Grid key={index}>
                                <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                            </Grid>
                        ))}
                        {macros.map((button, index) => (
                            <Grid key={index}>
                                {button._blank ? null : (
                                    <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                                )}
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

                    <Spacer y={0.2} x={4} hLine />

                    <div className='flex-row'>
                        <Input
                            labelSize='xxs'
                            inputWidth={1}
                            label='Probe Height'
                            value={probeHeight}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setProbeHeight, Storage.ProbeHeight)}
                        />

                        <Input
                            labelSize='xxs'
                            inputWidth={1}
                            label='Probe Width'
                            value={probeWidth}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setProbeWidth, Storage.ProbeWidth)}
                        />
                    </div>

                    <div className='flex-row'>
                        <Input
                            labelSize='xxs'
                            inputWidth={1}
                            label='Tool ⌀'
                            value={toolDiameter}
                            onChange={value => value !== undefined && updateAndSaveSetting(value, setToolDiameter, Storage.ToolDiameter)}
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
