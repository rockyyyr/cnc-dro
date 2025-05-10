import { useState, useContext } from 'react';
import Grid from '../util/Grid';
import Button from './Button';
import ProbePanel from './ProbePanel';
import { Context } from '../lib/FluidNC';
import Probe from '../assets/img/probe.svg';
import Air from '../assets/img/air.svg';
import Mist from '../assets/img/mist.svg';
import TerminalIcon from '../assets/img/terminal.svg';
import * as Coolant from '../lib/coolant';
import Terminal from './Terminal';

export default function UtilityPanel() {
    const [showProbePanel, setShowProbePanel] = useState(false);
    const [showTerminal, setShowTerminal] = useState(false);
    const { limits } = useContext(Context);

    const buttons = [
        { icon: Probe, onClick: () => setShowProbePanel(prev => !prev), variant: limits?.probe ? 'danger' : showProbePanel ? 'info' : '' },
        { icon: Air, onClick: Coolant.toggleAir },
        { icon: Mist, onClick: Coolant.toggleMist },
        { icon: TerminalIcon, onClick: () => setShowTerminal(true) },
    ];

    return (
        <div className='flex-row'>
            <ProbePanel
                show={showProbePanel}
                onClose={() => setShowProbePanel(false)}
            />
            {buttons.map((button, index) => (
                <Grid key={index}>
                    <Button icon={button.icon} onClick={button.onClick} variant={button.variant} />
                </Grid>
            ))}
            <Terminal
                show={showTerminal}
                onClose={() => setShowTerminal(false)}
            />
        </div>
    );
}