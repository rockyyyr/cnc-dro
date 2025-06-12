import { useState, useContext, useEffect } from 'react';

import Button from './Button';
import '../assets/button-panel.css';
import Grid from '../util/Grid';
import { Context, Comms, Commands, States } from '../lib/FluidNC';

import Home from '../assets/img/home.svg';
import Reset from '../assets/img/reset.svg';
import Play from '../assets/img/play.svg';
import Pause from '../assets/img/pause.svg';
import Locked from '../assets/img/locked.svg';
import Unlocked from '../assets/img/unlocked.svg';

const { RESET, ALARM, RUN, HOLD, IDLE, JOG, PROBE, EMERG, HOME } = States;

export default function ButtonPanel() {
    const [locked, setLocked] = useState(false);
    const [run, setRun] = useState(false);
    const [hold, setHold] = useState(false);
    const { state } = useContext(Context);

    useEffect(() => {
        if (state === ALARM) {
            setLocked(true);
            setRun(false);
            setHold(false);

        } else if (state === RUN) {
            setLocked(false);
            setRun(true);
            setHold(false);

        } else if (state?.includes(HOLD)) {
            setLocked(false);
            setRun(false);
            setHold(true);

        } else if (state === IDLE) {
            setLocked(false);
            setRun(false);
            setHold(false);
        }
    }, [state]);

    const alarmVariant = state => {
        switch (state) {
            case RESET:
                return 'danger';
            case ALARM:
                return 'warning';
            case EMERG:
                return 'danger';
            case RUN:
                return 'success';
            case HOME:
                return 'success';
            case HOLD:
                return 'warning';
            case JOG:
                return 'info';
            case PROBE:
                return 'success';
            case IDLE:
                return '';
        }
    };

    const buttons = [
        { label: state, disabled: true, variant: alarmVariant(state) },
        { icon: Home, onClick: () => Comms.send(Commands.HOME), bufferClick: true },
        { icon: locked ? Locked : Unlocked, onClick: () => Comms.send(Commands.UNLOCK), variant: locked ? 'danger' : '' },
        { icon: Reset, onClick: () => Comms.send(Commands.RESET) },
        { icon: Play, onClick: () => Comms.send(Commands.RESUME), variant: run ? 'success' : '' },
        { icon: Pause, onClick: () => Comms.send(Commands.HOLD), variant: hold ? 'warning' : '' },
    ];

    return (
        <div className={'vertical-button-panel'}>
            {buttons.map((button, index) => (
                <Grid key={index} y={1}>
                    <Button
                        label={button.label}
                        labelSize={button.label === 'Alarm' ? 'xs' : 'sm'}
                        icon={button.icon}
                        onClick={button.onClick}
                        variant={button.variant}
                        disabled={button.disabled}
                        bufferClick={button.bufferClick}
                    />
                </Grid>
            ))
            }
        </div >
    );
}
