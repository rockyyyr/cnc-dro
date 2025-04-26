import { useState, useContext } from 'react';

import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Input from './Input';

import DownLeft from '../assets/img/arrow-down-left.svg';
import DownRight from '../assets/img/arrow-down-right.svg';
import UpLeft from '../assets/img/arrow-up-left.svg';
import UpRight from '../assets/img/arrow-up-right.svg';

import { probeZ, probeXY, probeX, probeY } from '../lib/probe';

import { Context, Api } from '../lib/FluidNC';
import Spacer from '../util/Spacer';


export default function ProbePanel({ show, onClose }) {
    const [probeHeight, setProbeHeight] = useState(5);
    const [probeWidth, setProbeWidth] = useState(5);
    const [probeDirection, setProbeDirection] = useState({ y: -1, x: -1, label: 'downleft' });

    // eslint-disable-next-line no-unused-vars
    // const [ready, message, send] = useContext(Context);

    const runProbeZ = () => Api.command(probeZ(probeHeight));
    const runProbeXY = () => Api.command(probeXY(probeWidth, probeDirection));
    const runProbeX = () => Api.command(probeX(probeWidth, probeDirection));
    const runProbeY = () => Api.command(probeY(probeWidth, probeDirection));

    const runAndClose = command => () => {
        command();
        onClose();
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

    return (
        <Modal
            show={show}
            onClose={() => onClose()}
        >
            <Grid x={4}>
                <h2 style={{ marginBottom: 10 }}>Probe</h2>
            </Grid>
            <div className="flex-row">
                {probeButtons.map((button, index) => (
                    <Grid key={index}>
                        <Button label={button.label} onClick={button.onClick} />
                    </Grid>
                ))}

            </div>
            <Spacer y={0.5} x={4} hLine />
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
                    onChange={value => value && setProbeHeight(value)}
                />

                <Input
                    labelSize='xs'
                    inputWidth={1}
                    label='Probe Width'
                    value={probeWidth}
                    onChange={value => value && setProbeWidth(value)}
                />
            </div>
        </Modal>
    );
}
