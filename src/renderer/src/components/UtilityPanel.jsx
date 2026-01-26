import { useState, useContext, useEffect } from 'react';
import { Constants } from '../lib/FluidNC';
import Grid from '../util/Grid';
import Button from './Button';
import ProbePanel from './ProbePanel';
import { probeZ } from '../lib/probe';
import { Context, States } from '../lib/FluidNC';
import * as Coolant from '../lib/coolant';
import Terminal from './Terminal';

import Probe from '../assets/img/probe.svg';
import TouchPlate from '../assets/img/touchplate.svg';
import Air from '../assets/img/air.svg';
// import Mist from '../assets/img/mist.svg';
import TerminalIcon from '../assets/img/terminal.svg';
// import Vacuum from '../assets/img/vacuum.svg';
// import VacuumPanel from './VacuumPanel';

export default function UtilityPanel() {
    const [showProbePanel, setShowProbePanel] = useState(false);
    // const [showVacuumPanel, setShowVacuumPanel] = useState(false);
    const [showTerminal, setShowTerminal] = useState(false);
    // const [airEnabled, setAirEnabled] = useState(false);
    // const [mistEnabled, setMistEnabled] = useState(false);
    const [override, setOverride] = useState(false);
    const { state, limits, accessories, setAir, disableMovement } = useContext(Context);

    useEffect(() => {
        setOverride([States.RUN, States.HOLD].includes(state));
    }, [state]);

    const toggleAir = () => {
        if (accessories?.air) {
            Coolant.disableAir(override);
            setAir(false);

        } else {
            Coolant.enableAir(override);
            setAir(true);
        }
    };

    // const toggleMist = () => {
    //     setMistEnabled(!mistEnabled);
    // };

    const buttons = [
        { icon: Probe, onClick: () => setShowProbePanel(true), variant: limits?.probe ? 'danger' : showProbePanel ? 'info' : '', disabled: disableMovement },
        { icon: TouchPlate, onClick: () => probeZ(Constants.Dimensions.TouchProbe.height), variant: accessories?.mist ? 'success' : '' },
        { icon: Air, onClick: toggleAir, variant: accessories?.air ? 'info' : '' },
        { icon: TerminalIcon, onClick: () => setShowTerminal(true) },
        // { icon: Vacuum, onClick: () => setShowVacuumPanel(true), variant: vacuumMode ? 'success' : '' },
    ];

    return (
        <div className='flex-row'>
            <ProbePanel
                show={showProbePanel}
                onClose={() => setShowProbePanel(false)}
            />
            {buttons.map((button, index) => (
                <Grid key={index}>
                    <Button icon={button.icon} onClick={button.onClick} variant={button.variant} actuallyDisable disabled={button.disabled} />
                </Grid>
            ))}
            <Terminal
                show={showTerminal}
                onClose={() => setShowTerminal(false)}
            />
            {/* <VacuumPanel
                show={showVacuumPanel}
                onClose={() => setShowVacuumPanel(false)}
            /> */}
        </div>
    );
}