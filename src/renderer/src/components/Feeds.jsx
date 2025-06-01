import { useContext } from 'react';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { Context, Commands, Comms } from '../lib/FluidNC';
import OverridePanel from './OverridePanel';

const { FEEDRATE_OVERRIDE_PLUS, FEEDRATE_OVERRIDE_MINUS } = Commands;

export default function Feeds() {
    const { feedrate, overrides } = useContext(Context);

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label='F'
                    value={feedrate}
                    unit='mm/min'
                />
            </Grid>
            <OverridePanel
                value={overrides?.feedrate || 100}
                onPlus={() => Comms.send(FEEDRATE_OVERRIDE_PLUS)}
                onMinus={() => Comms.send(FEEDRATE_OVERRIDE_MINUS)}
            />
        </div>
    );
}
