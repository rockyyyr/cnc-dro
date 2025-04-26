import { useContext, useEffect, useState } from 'react';
import '../assets/position-panel.css';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { Context, Messages } from '../lib/FluidNC';
import { zeroAxis } from '../lib/positions';

export default function PositionsPanel() {
    const [ready, message] = useContext(Context);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const [machineX, setMachineX] = useState(0);
    const [machineY, setMachineY] = useState(0);
    const [machineZ, setMachineZ] = useState(0);

    const blocks = [
        { label: 'X', value: x, secondaryValue: machineX, unit: 'mm', onClick: () => zeroAxis('X') },
        { label: 'Y', value: y, secondaryValue: machineY, unit: 'mm', onClick: () => zeroAxis('Y') },
        { label: 'Z', value: z, secondaryValue: machineZ, unit: 'mm', onClick: () => zeroAxis('Z') },
    ];

    useEffect(() => {
        if (ready && message?.type === Messages.MessageType.STATE) {
            if (message.workPosition) {
                setX(message.workPosition.x);
                setY(message.workPosition.y);
                setZ(message.workPosition.z);
            }

            if (message.machinePosition) {
                setMachineX(message.machinePosition.x);
                setMachineY(message.machinePosition.y);
                setMachineZ(message.machinePosition.z);
            }
        }
    }, [ready, message]);

    return (
        <div className="display-panel" style={{ border: 'none' }}>
            {blocks.map(block => (
                <Grid key={block.label} x={4}>
                    <DataBlock
                        label={block.label}
                        value={block.value}
                        secondaryValue={block.secondaryValue}
                        // unit={block.unit}
                        onClick={block.onClick}
                        buttonLabel={'Zero'}
                    />
                </Grid>
            ))}
        </div>
    );

}
