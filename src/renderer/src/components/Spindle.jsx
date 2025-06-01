import { useState, useContext, useEffect } from 'react';
import { useNumpad } from '../util/Numpad';
import Grid from '../util/Grid';
import Button from './Button';
import DataBlock from './DataBlock';
import { Context, Commands, Comms, States } from '../lib/FluidNC';
import { clockwise, off } from '../lib/spindle';
import OverridePanel from './OverridePanel';

import Rotate from '../assets/img/rotate.svg';
import RotateStop from '../assets/img/rotate-stop.svg';

const { SPINDLE_OVERRIDE_PLUS, SPINDLE_OVERRIDE_MINUS } = Commands;

export default function Spindle() {
    const { show } = useNumpad();
    const [spindleSetting, setSpindleSetting] = useState(0);
    const [override, setOverride] = useState(false);
    const { state, spindleSpeed, accessories, overrides } = useContext(Context);

    useEffect(() => {
        setOverride(state === States.RUN);
    }, [state]);

    const showNumpad = () => show({
        onChange: value => setSpindleSetting(value)
    });

    const spindleButtons = [
        { icon: Rotate, onClick: () => clockwise(spindleSetting, override), variant: accessories?.spindle ? 'info' : '' },
        { icon: RotateStop, onClick: () => off(override) },
    ];

    return (
        <div>
            <Grid x={4}>
                <DataBlock
                    label={'S'}
                    value={spindleSpeed}
                    unit={'rpm'}
                />
            </Grid>
            <div className="flex-row">
                {spindleButtons.map((button, index) => (
                    <Grid key={index}>
                        <Button
                            icon={button.icon}
                            label={button.label}
                            onClick={button.onClick}
                            variant={button.variant}
                        />
                    </Grid>
                ))}
                <Grid x={2}>
                    <Button
                        label={spindleSetting}
                        outline
                        onClick={showNumpad}
                    />
                </Grid>
            </div>
            <OverridePanel
                value={overrides?.spindle || 100}
                onPlus={() => Comms.send(SPINDLE_OVERRIDE_PLUS)}
                onMinus={() => Comms.send(SPINDLE_OVERRIDE_MINUS)}
            />
        </div>
    );
}
