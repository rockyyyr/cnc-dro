import { useState, useContext, useEffect } from 'react';
import Grid from '../util/Grid';
import Button from './Button';
import DataBlock from './DataBlock';
import { Context, Messages } from '../lib/FluidNC';

export default function Feeds() {
    const [ready, message] = useContext(Context);
    const [feedRateOverride, setFeedRateOverride] = useState(0);
    const [feedRate, setFeedRate] = useState(0);

    useEffect(() => {
        if (ready && message?.type === Messages.MessageType.STATE) {
            if (![undefined, null].includes(message.feedrate)) {
                setFeedRate(message.feedrate);
            }
        }
    }, [ready, message]);

    const minus10 = () => setFeedRateOverride(prev => prev - 10);
    const plus10 = () => setFeedRateOverride(prev => prev + 10);

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label='F'
                    value={feedRate}
                    unit='mm/min'
                />
            </Grid>
            <div className="flex-row">
                <Grid>
                    <Button
                        label='-10%'
                        labelSize='sm'
                        onClick={minus10}
                    />
                </Grid>
                <Grid x={2}>
                    <Button
                        label={`${100 + feedRateOverride}%`}
                        labelSize='sm'
                        outline
                        disabled
                    />
                </Grid>
                <Grid>
                    <Button
                        label='+10%'
                        labelSize='sm'
                        onClick={plus10}
                    />
                </Grid>
            </div>
        </div>
    );
}
