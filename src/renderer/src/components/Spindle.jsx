import { useState, useContext, useEffect } from 'react';
import { useNumpad } from '../util/Numpad';
import Grid from '../util/Grid';
import Button from './Button';
import DataBlock from './DataBlock';
import { Context, Messages } from '../lib/FluidNC';
import { clockwise, off } from '../lib/spindle';

import Rotate from '../assets/img/rotate.svg';
import RotateStop from '../assets/img/rotate-stop.svg';

export default function Spindle() {
    const { show } = useNumpad();
    const [spindleSetting, setSpindleSetting] = useState(0);
    const [spindleSpeed, setSpindleSpeed] = useState(0);
    // const [showNumpad, setShowNumpad] = useState(false);

    const showNumpad = () => show({
        onChange: value => setSpindleSetting(value)
    });

    const [ready, message] = useContext(Context);

    useEffect(() => {
        if (ready && message?.type === Messages.MessageType.STATE) {
            if (![undefined, null].includes(message.spindleSpeed)) {
                setSpindleSpeed(message.spindleSpeed);
            }
        }
    }, [ready, message]);

    const spindleButtons = [
        { icon: Rotate, onClick: () => clockwise(spindleSetting), variant: spindleSpeed > 0 ? 'info' : '' },
        { icon: RotateStop, onClick: off },
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
                    {/* <Numpad
                        show={showNumpad}
                        onChange={value => {
                            setSpindleSetting(value);
                            setShowNumpad(false);
                        }}
                        onClose={() => setShowNumpad(false)}
                    /> */}
                    <Button
                        label={spindleSetting}
                        outline
                        onClick={showNumpad}
                    />
                </Grid>
            </div>
        </div>
    );
}
