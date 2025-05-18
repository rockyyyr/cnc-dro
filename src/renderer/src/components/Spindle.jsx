import { useState, useContext } from 'react';
import { useNumpad } from '../util/Numpad';
import Grid from '../util/Grid';
import Button from './Button';
import DataBlock from './DataBlock';
import { Context } from '../lib/FluidNC';
import { clockwise, off } from '../lib/spindle';

import Rotate from '../assets/img/rotate.svg';
import RotateStop from '../assets/img/rotate-stop.svg';

export default function Spindle() {
    const { show } = useNumpad();
    const [spindleSetting, setSpindleSetting] = useState(0);
    const { spindleSpeed, accessories } = useContext(Context);

    const showNumpad = () => show({
        onChange: value => setSpindleSetting(value)
    });

    const spindleButtons = [
        { icon: Rotate, onClick: () => clockwise(spindleSetting), variant: accessories?.spindle ? 'info' : '' },
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
