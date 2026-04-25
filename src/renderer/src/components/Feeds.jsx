import { useContext, useSyncExternalStore } from 'react';
import Grid from '../util/Grid';
import DataBlock from './DataBlock';
import { Context, Commands, Comms, States } from '../lib/FluidNC';
import { useNumpad } from '../util/Numpad';
import OverridePanel from './OverridePanel';
import * as Jog from '../lib/jog';

const { FEEDRATE_OVERRIDE_PLUS, FEEDRATE_OVERRIDE_MINUS } = Commands;

function useJogFeedrate() {
    return useSyncExternalStore(Jog.subscribeFeedrate, Jog.getFeedrate);
}

export default function Feeds() {
    const { feedrate, overrides, state } = useContext(Context);
    const jogFeedrate = useJogFeedrate();
    const { show } = useNumpad();

    const showNumpad = () => show({
        onChange: value => Jog.setFeedrate(value)
    });

    const showJogFeedrate = [States.JOG, States.IDLE, null].includes(state) && jogFeedrate;

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label='F'
                    value={<>{feedrate}<span style={{ fontSize: '1.1rem', marginLeft: 10 }}>mm/min</span></>}
                    // secondaryLabel={'Jog'}
                    secondaryValue={showJogFeedrate ? <>{jogFeedrate}<span style={{ marginLeft: 10, fontSize: '0.9rem' }}>mm/min</span></> : undefined}
                    onClick={showNumpad}
                    small={showJogFeedrate}
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
