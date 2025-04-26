import { useState } from 'react';
import Grid from '../util/Grid';
import Button from './Button';
import ProbePanel from './ProbePanel';

import Probe from '../assets/img/probe.svg';
import Air from '../assets/img/air.svg';
import Mist from '../assets/img/mist.svg';
import Terminal from '../assets/img/terminal.svg';

export default function UtilityPanel() {
    const [showProbePanel, setShowProbePanel] = useState(false);

    const buttons = [
        { icon: Probe, onClick: () => setShowProbePanel(prev => !prev), variant: showProbePanel ? 'info' : '' },
        { icon: Air, onClick: () => console.log('Button 4 clicked') },
        { icon: Mist, onClick: () => console.log('Button 4 clicked') },
        { icon: Terminal, onClick: () => console.log('Button 4 clicked') },
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
            {/* <ProbePanel show={showProbePanel} onClose={() => setShowProbePanel(false)} /> */}
        </div>
    );
}