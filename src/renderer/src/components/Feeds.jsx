import { useState, useContext } from 'react';
import Grid from '../util/Grid';
import Button from './Button';
import DataBlock from './DataBlock';
import { Context } from '../lib/FluidNC';

export default function Feeds() {
    const { feedrate } = useContext(Context);
    const [feedrateOverride, setFeedrateOverride] = useState(0);

    const minus10 = () => setFeedrateOverride(prev => prev - 10);
    const plus10 = () => setFeedrateOverride(prev => prev + 10);

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label='F'
                    value={feedrate}
                    unit='mm/min'
                />
            </Grid>
            <div className="flex-row">
                <Grid>
                    <Button
                        label='-10%'
                        labelSize='xs'
                        onClick={minus10}
                    />
                </Grid>
                <Grid x={2}>
                    <Button
                        label={`${100 + feedrateOverride}%`}
                        labelSize='sm'
                        outline
                        disabled
                    />
                </Grid>
                <Grid>
                    <Button
                        label='+10%'
                        labelSize='xs'
                        onClick={plus10}
                    />
                </Grid>
            </div>
        </div>
    );
}
