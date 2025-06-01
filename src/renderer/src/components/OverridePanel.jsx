import { useContext } from 'react';
import { Context, States } from '../lib/FluidNC';
import Grid from '../util/Grid';
import Button from './Button';

export default function OverridePanel({ value, onPlus, onMinus }) {
    const { state } = useContext(Context);
    const disabled = state !== States.RUN;

    return (
        <div className="flex-row">
            <Grid y={0.75}>
                <Button
                    label='-10%'
                    labelSize='xs'
                    onClick={onMinus}
                    disabled={disabled}
                    actuallyDisable={disabled}
                />
            </Grid>
            <Grid y={0.75} x={2}>
                <Button
                    label={`${value}%`}
                    labelSize='sm'
                    outline
                    disabled
                    actuallyDisable={disabled}
                />
            </Grid>
            <Grid y={0.75}>
                <Button
                    label='+10%'
                    labelSize='xs'
                    onClick={onPlus}
                    disabled={disabled}
                    actuallyDisable={disabled}
                />
            </Grid>
        </div>
    );
};