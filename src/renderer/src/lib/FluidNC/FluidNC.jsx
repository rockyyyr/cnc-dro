import { useEffect, useRef, useState } from "react";
import FluidNCContext from "./Context";
import * as Messages from './Messages';
import * as Commands from './Commands';
import { WS, PING_INTERVAL } from './Constants';

const FluidNC = ({ children }) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState(null);

    const ws = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(WS);

        let pingInterval;

        socket.onopen = () => {
            setIsReady(true);
            pingInterval = setInterval(() => socket.send(Commands.STATUS), PING_INTERVAL);
        };

        socket.onclose = () => {
            setIsReady(false);
            clearInterval(pingInterval);
        };

        socket.onerror = error => console.error("WebSocket error:", error);
        socket.onmessage = async event => setVal(await Messages.parse(event));

        ws.current = socket;

        return () => {
            socket.close();
        };
    }, []);

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