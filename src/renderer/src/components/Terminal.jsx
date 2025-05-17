import { useContext, useEffect } from 'react';
import { Comms } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import { ReactTerminal, TerminalContext } from "react-terminal";


export default function Terminal({ show, onClose }) {
    // const { setBufferedContent, setTemporaryContent } = useContext(TerminalContext);

    const sendCommand = (command, args) => {
        Comms.send([command, args].join(' '));
    };

    // useEffect(() => {
    //     const receiveMessage = message => {
    //         if (!message || message.startsWith('<')) {
    //             return;
    //         }

    //         setBufferedContent(prev => (
    //             <>
    //                 {prev}
    //                 <span>&gt; {message}</span>
    //                 <br />
    //             </>
    //         ));
    //         setTemporaryContent('');
    //     };
    //     Comms.onmessage(receiveMessage);
    // }, [setBufferedContent, setTemporaryContent]);

    return (
        <Modal
            show={show}
            onClose={onClose}
            noPadding
        >
            <Grid x={9} y={5} style={{ padding: 0 }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden' }}>
                    <ReactTerminal
                        showControlButtons={false}
                        showControlBar={false}
                        theme='material-dark'
                        prompt={'cnc # '}
                        defaultHandler={sendCommand}
                    />
                </div>
            </Grid>
        </Modal>
    );
}