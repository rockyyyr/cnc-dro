import { useContext } from 'react';
import { Context } from '../lib/FluidNC';
import '../assets/position-panel.css';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { zeroAxis } from '../lib/positions';

export default function PositionsPanel() {
    const { workPosition, machinePosition, limits } = useContext(Context);

    const blocks = [
        { label: 'X', value: workPosition.x, secondaryValue: machinePosition.x, unit: 'mm', onClick: () => zeroAxis('X'), variant: limits?.x ? 'danger' : '' },
        { label: 'Y', value: workPosition.y, secondaryValue: machinePosition.y, unit: 'mm', onClick: () => zeroAxis('Y'), variant: limits?.y ? 'danger' : '' },
        { label: 'Z', value: workPosition.z, secondaryValue: machinePosition.z, unit: 'mm', onClick: () => zeroAxis('Z'), variant: limits?.z ? 'danger' : '' },
    ];

    return (
        <div className="display-panel" style={{ border: 'none' }}>
            {blocks.map(block => (
                <Grid key={block.label} x={4}>
                    <DataBlock
                        label={block.label}
                        variant={block.variant}
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
