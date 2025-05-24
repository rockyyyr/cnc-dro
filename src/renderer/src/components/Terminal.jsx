import { useContext, useEffect } from 'react';
import { ReactTerminal, TerminalContext } from "react-terminal";
import { Comms, Context } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import '../assets/terminal.css';

export default function Terminal({ show, onClose }) {
    const { setBufferedContent, setTemporaryContent } = useContext(TerminalContext);
    const { message } = useContext(Context);

    useEffect(() => {
        if (show && message) {
            setBufferedContent(prev => (
                <>
                    {prev}
                    <span>&gt; {message.value || message.level}</span>
                    <br />
                </>
            ));
            setTemporaryContent('');
        }
    }, [show, message, setBufferedContent, setTemporaryContent]);

    const sendCommand = (command, args) => {
        Comms.send([command, args].join(' '));
    };

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
                        prompt={<span style={{ marginRight: 0 }}>cnc # </span>}
                        defaultHandler={sendCommand}
                        caret={false}
                    />
                </div>
            </Grid>
        </Modal>
    );
}