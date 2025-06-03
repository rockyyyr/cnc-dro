import { useEffect, useState, useRef } from "react";
import FluidNCContext from "./Context";

import GenericDescriptions from './GenericDescriptions.json';
import { roundTo } from '../../util/numbers';
import ExternalNumpad from '../../util/ExternalNumpad';
// import * as Positions from '../positions';
// import * as Constants from './Constants';

import Comms from './Communication';
import Queue from './Communication/Queue';
import * as Messages from './Communication/Messages';
import States from './States';
import * as Commands from './Commands';

const FluidNC = ({ children }) => {
    const externalNumpadRef = useRef(null);

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

    const [air, setAir] = useState(false);
    const [mist, setMist] = useState(false);
    const [spindle, setSpindle] = useState(false);

    const [vacuumMode, setVacuumMode] = useState(false);

    const safeSetNumber = (value, setter) => ![undefined, null].includes(value) && !isNaN(value) && setter(value);

    const loadExternalKeypad = async () => {
        try {
            const keypad = new ExternalNumpad();
            await keypad.open();

            setNotification({
                level: Messages.MessageLevels.INFO,
                value: 'External keypad connected'
            });

        } catch (error) {
            console.error(error);

            setNotification({
                level: Messages.MessageLevels.ERROR,
                value: 'Failed to connect external keypad'
            });
        }
    };

    useEffect(() => {
        Comms.open();
        Comms.onopen(async () => {
            setReady(true);
            const queue = new Queue(Comms);
            queue.onReset(() => {
                setState(States.RESET);
                Comms.send(Commands.STATUS);
            });

            Comms.addQueue(queue);
            Comms.autoReport();

            setTimeout(() => externalNumpadRef.current?.click(), 2000);
        });
        Comms.onclose(() => setReady(false));
        return () => Comms.close();
    }, []);

    // useEffect(() => {
    //     if (vacuumMode) {
    //         const mPos = {
    //             x: roundTo(workX + workOffsetX, 3),
    //             y: roundTo(workY + workOffsetY, 3)
    //         };

    //         Positions.constrainPosition(Constants.VacuumMode, mPos, message => {
    //             Comms.send(Commands.HOLD);
    //             setNotification({
    //                 level: Messages.MessageLevels.ERROR,
    //                 value: message
    //             });
    //         });
    //     }
    // }, [workX, workY, vacuumMode, workOffsetX, workOffsetY]);

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
                        setOverrides({ ...message.overrides });
                    }

                    if (message.accessories) {
                        setAir(message.accessories.air);
                        setMist(message.accessories.mist);
                        setSpindle(message.accessories.spindle);
                    }

                    safeSetNumber(message.feedrate, setFeedrate);
                    safeSetNumber(message.spindleSpeed, setSpindleSpeed);
                    safeSetNumber(message.line, setLine);
                    setLimits(message.limits);

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
        accessories: {
            air,
            mist,
            spindle,
        },
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
        },
        vacuumMode,
        enableVacuumMode: enabled => setVacuumMode(enabled)
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
            <button style={{ display: 'none' }} ref={externalNumpadRef} onClick={loadExternalKeypad} />
        </FluidNCContext.Provider>
    );
};

export default FluidNC;