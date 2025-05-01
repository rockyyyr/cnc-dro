import { useEffect, useState } from "react";
import FluidNCContext from "./Context";

import GenericDescriptions from './GenericDescriptions.json';

import Comms from './Communication';
import Queue from './Communication/Queue';

import * as Messages from './Messages';

const FluidNC = ({ children }) => {
    const [ready, setReady] = useState(false);
    const [notification, setNotification] = useState(null);

    const [state, setState] = useState(null);
    const [substate, setSubstate] = useState(null);

    const [workX, setWorkX] = useState(0);
    const [workY, setWorkY] = useState(0);
    const [workZ, setWorkZ] = useState(0);

    const [machineX, setMachineX] = useState(0);
    const [machineY, setMachineY] = useState(0);
    const [machineZ, setMachineZ] = useState(0);

    const [probeResults, setProbeResults] = useState([]);
    const [limits, setLimits] = useState(null);
    const [feedrate, setFeedrate] = useState(0);
    const [spindleSpeed, setSpindleSpeed] = useState(0);

    const safeSetNumber = (value, setter) => ![undefined, null].includes(value) && !isNaN(value) && setter(value);

    useEffect(() => {
        Comms.open();
        Comms.onopen(() => {
            console.log('comms open');
            setReady(true);

            Comms.addQueue(new Queue(Comms));
            Comms.autoReport();
        });
        Comms.onclose(() => setReady(false));
        return () => Comms.close();
    }, []);

    useEffect(() => {
        if (ready) {
            Comms.onmessage(async message => {
                if (message.type === Messages.MessageType.STATUS) {
                    if (message.state) {
                        setState(message.state);
                        setSubstate(message.substate);
                    }

                    if (message.workPosition) {
                        safeSetNumber(message.workPosition.x, setWorkX);
                        safeSetNumber(message.workPosition.y, setWorkY);
                        safeSetNumber(message.workPosition.z, setWorkZ);
                    }

                    if (message.machinePosition) {
                        safeSetNumber(message.machinePosition.x, setMachineX);
                        safeSetNumber(message.machinePosition.y, setMachineY);
                        safeSetNumber(message.machinePosition.z, setMachineZ);
                    }

                    safeSetNumber(message.feedrate, setFeedrate);
                    safeSetNumber(message.spindleSpeed, setSpindleSpeed);
                    setLimits(message.limits);
                }

                if (message.type === Messages.MessageType.INFO) {
                    if (message.value) {
                        setNotification(message);
                    }
                }

                if (message.type === Messages.MessageType.PROBE) {
                    if (message.value) {
                        setNotification({
                            level: message.success ? Messages.MessageLevels.INFO : Messages.MessageLevels.ERROR,
                            value: message.success ? 'Probe successful' : 'Probe failed',
                        });
                        setProbeResults(prev => [{
                            success: message.success,
                            value: message.value,
                            timestamp: Date.now()
                        }, ...prev]);
                    }
                }

                if (message.type === Messages.MessageType.GENERIC) {
                    if (['ALARM', 'error'].some(val => message.value.includes(val))) {
                        setNotification({
                            ...message,
                            level: Messages.MessageLevels.ERROR,
                            value: GenericDescriptions[message.value] || message.value
                        });
                    }
                }
            });
        }
    }, [ready]);

    const status = {
        state,
        substate,
        notification,
        probeResults,
        workPosition: {
            x: workX,
            y: workY,
            z: workZ,
        },
        machinePosition: {
            x: machineX,
            y: machineY,
            z: machineZ,
        },
        limits,
        feedrate,
        spindleSpeed
    };

    return (
        <FluidNCContext.Provider value={status}>
            {!Comms.ready && (
                <div className='not-connected-overlay'>
                    <h1>Connecting</h1>
                    <div className="loading" />
                </div>
            )}
            {children}
        </FluidNCContext.Provider>
    );
};

export default FluidNC;