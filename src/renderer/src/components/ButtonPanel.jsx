import { useState, useContext, useEffect } from 'react';

import Button from './Button';
import '../assets/button-panel.css';
import Grid from '../util/Grid';
import { Context, Messages, Constants, Api, Commands } from '../lib/FluidNC';

import Home from '../assets/img/home.svg';
import Reset from '../assets/img/reset.svg';
import Play from '../assets/img/play.svg';
import Pause from '../assets/img/pause.svg';
import Locked from '../assets/img/locked.svg';
import Unlocked from '../assets/img/unlocked.svg';

const { ALARM, RUN, HOLD, IDLE } = Constants.States;

export default function ButtonPanel() {
    const [locked, setLocked] = useState(false);
    const [run, setRun] = useState(false);
    const [hold, setHold] = useState(false);
    const [ready, message] = useContext(Context);

    useEffect(() => {
        if (ready && message?.type === Messages.MessageType.STATE) {
            if (message.state === ALARM) {
                setLocked(true);
                setRun(false);
                setHold(false);

            } else if (message.state === RUN) {
                setLocked(false);
                setRun(true);
                setHold(false);

            } else if (message.state.includes(HOLD)) {
                setLocked(false);
                setRun(false);
                setHold(true);

            } else if (message.state === IDLE) {
                setLocked(false);
                setRun(false);
                setHold(false);
            }
        }
    }, [ready, message]);

    const buttons = [
        { icon: Home, onClick: () => Api.command(Commands.HOME) },
        { icon: locked ? Locked : Unlocked, onClick: () => Api.command(Commands.UNLOCK), variant: locked ? 'danger' : '' },
        { icon: Reset, onClick: () => Api.command(Commands.RESET) },
        { icon: Play, onClick: () => Api.command(Commands.RESUME), variant: run ? 'success' : '' },
        { icon: Pause, onClick: () => Api.command(Commands.HOLD), variant: hold ? 'warning' : '' },
    ];

    return (
        <div className={'vertical-button-panel'}>
            {buttons.map((button, index) => (
                <Grid key={index} y={6 / 5}>
                    <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                </Grid>
            ))
            }
        </div >
    );
}
