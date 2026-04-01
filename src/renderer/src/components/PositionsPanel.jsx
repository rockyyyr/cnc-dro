import { useContext } from 'react';
import { Context } from '../lib/FluidNC';
import '../assets/position-panel.css';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { zeroWorkAxis } from '../lib/positions';

export default function PositionsPanel() {
    const { workPosition, machinePosition, limits, faults, inputs } = useContext(Context);

    const yLabel = inputs?.fault && (faults.y || faults.a)
        ? `${faults.y ? 'Y' : ''}${faults.a ? 'A' : ''}`
        : 'Y';

    const blocks = [
        { label: 'X', value: workPosition.x, secondaryValue: machinePosition.x, unit: 'mm', onClick: () => zeroWorkAxis('X'), variant: (limits?.x || (inputs?.fault && faults?.x)) ? 'danger' : '' },
        { label: yLabel, value: workPosition.y, secondaryValue: machinePosition.y, unit: 'mm', onClick: () => zeroWorkAxis('Y'), variant: (limits?.y || (inputs?.fault && (faults?.y || faults.a))) ? 'danger' : '' },
        { label: 'Z', value: workPosition.z, secondaryValue: machinePosition.z, unit: 'mm', onClick: () => zeroWorkAxis('Z'), variant: (limits?.z || (inputs?.fault && faults?.z)) ? 'danger' : '' },
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
