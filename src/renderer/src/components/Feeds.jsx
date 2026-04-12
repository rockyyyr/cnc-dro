import { useContext, useState } from 'react';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { Context, Commands, Comms, States } from '../lib/FluidNC';
import { useNumpad } from '../util/Numpad';
import OverridePanel from './OverridePanel';
import * as Jog from '../lib/jog';
import * as Storage from '../util/storage';

const { FEEDRATE_OVERRIDE_PLUS, FEEDRATE_OVERRIDE_MINUS } = Commands;

export default function Feeds() {
    const { feedrate, overrides, state } = useContext(Context);
    const [jogFeedRate, setJogFeedrate] = useState(null);
    const { show } = useNumpad();

    const showNumpad = () => show({
        onChange: value => Storage.setStateAndSave(value, setJogFeedrate, Jog.StorageNames.JogFeedrate)
    });

    const displayFeedRate = !state || state === States.IDLE
        ? jogFeedRate
        : feedrate;

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label='F'
                    value={displayFeedRate}
                    unit='mm/min'
                    onClick={showNumpad}
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
