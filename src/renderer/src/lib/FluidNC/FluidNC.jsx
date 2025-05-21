import { useEffect, useState } from "react";
import FluidNCContext from "./Context";

import GenericDescriptions from './GenericDescriptions.json';
import { roundTo } from '../../util/numbers';

import Comms from './Communication';
import Queue from './Communication/Queue';

import * as Messages from './Messages';
import States from './States';

const FluidNC = ({ children }) => {
    const [ready, setReady] = useState(false);
    const [notification, setNotification] = useState(null);

    const [state, setState] = useState(null);
    const [substate, setSubstate] = useState(null);

    const [workX, setWorkX] = useState(0);
    const [workY, setWorkY] = useState(0);
    const [workZ, setWorkZ] = useState(0);

    const [workOffsetX, setWorkOffsetX] = useState(0);
    const [workOffsetY, setWorkOffsetY] = useState(0);
    const [workOffsetZ, setWorkOffsetZ] = useState(0);

    const [probeResults, setProbeResults] = useState([]);
    const [limits, setLimits] = useState(null);
    const [feedrate, setFeedrate] = useState(0);
    const [spindleSpeed, setSpindleSpeed] = useState(0);
    const [message, setMessage] = useState(null);
    const [line, setLine] = useState(null);
    const [overrides, setOverrides] = useState(null);
    const [accessories, setAccessories] = useState(null);

    const safeSetNumber = (value, setter) => ![undefined, null].includes(value) && !isNaN(value) && setter(value);

    useEffect(() => {
        Comms.open();
        Comms.onopen(() => {
            setReady(true);

            const queue = new Queue(Comms);
            queue.onReset(() => setState(States.RESET));

            Comms.addQueue(queue);
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

                    if (message.workOffset) {
                        safeSetNumber(message.workOffset.x, setWorkOffsetX);
                        safeSetNumber(message.workOffset.y, setWorkOffsetY);
                        safeSetNumber(message.workOffset.z, setWorkOffsetZ);
                    }

                    if (message.workPosition) {
                        safeSetNumber(message.workPosition.x, setWorkX);
                        safeSetNumber(message.workPosition.y, setWorkY);
                        safeSetNumber(message.workPosition.z, setWorkZ);
                    }

                    if (message.overrides) {
                        setOverrides(message.overrides);
                    }

                    safeSetNumber(message.feedrate, setFeedrate);
                    safeSetNumber(message.spindleSpeed, setSpindleSpeed);
                    safeSetNumber(message.line, setLine);
                    setLimits(message.limits);
                    setAccessories(message.accessories);

                } else if (message.type === Messages.MessageType.INFO) {
                    if (message.value) {
                        setMessage(message);
                        setNotification(message);
                    }

                } else if (message.type === Messages.MessageType.PROBE) {
                    if (message.value) {
                        setMessage(message);
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

                } else if (message.type === Messages.MessageType.GENERIC) {
                    setMessage(message);

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
        message,
        notification,
        probeResults,
        limits,
        feedrate,
        spindleSpeed,
        line,
        overrides,
        accessories,
        workPosition: {
            x: workX,
            y: workY,
            z: workZ,
        },
        machinePosition: {
            x: roundTo(workX + workOffsetX, 3),
            y: roundTo(workY + workOffsetY, 3),
            z: roundTo(workZ + workOffsetZ, 3),
        },
        workOffset: {
            x: workOffsetX,
            y: workOffsetY,
            z: workOffsetZ,
        }
    };

    return (
        <FluidNCContext.Provider value={status}>
            {/* {!Comms.ready && (
                <div className='not-connected-overlay'>
                    <h1>Connecting</h1>
                    <div className="loading" />
                </div>
            )} */}
            {children}
        </FluidNCContext.Provider>
    );
};

export default FluidNC;