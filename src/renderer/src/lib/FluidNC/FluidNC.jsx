import { useEffect, useRef, useState } from "react";
import FluidNCContext from "./Context";
import * as Messages from './Messages';
import * as Commands from './Commands';
import { PING_INTERVAL } from './Constants';

const FluidNC = ({ children, comms }) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState(null);

    const ws = useRef(null);

    useEffect(() => {
        let pingInterval;

        comms.open();

        comms.onopen(() => {
            console.log('port opened');

            setIsReady(true);
            pingInterval = setInterval(() => comms.send(Commands.STATUS), PING_INTERVAL);
        });

        comms.onclose(() => {
            setIsReady(false);
            clearInterval(pingInterval);
        });

        comms.onerror(error => console.error("Communication error:", error));
        comms.onmessage(async event => setVal(await Messages.parse(event)));

        ws.current = comms;

        return () => {
            comms.close();
        };
    }, [comms]);

    const ret = [isReady, val, ws.current?.send.bind(ws.current)];

    return (
        <FluidNCContext.Provider value={ret}>
            {!isReady && (
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