import { useEffect, useRef, useContext, useState } from "react";
import Gcode from './Gcode';
import Scene from './Scene';
import { Context, Files } from '../../lib/FluidNC';
import Button from '../Button';
import Grid from '../../util/Grid';
import * as Job from '../../lib/job';

import '../../assets/visualizer.css';
import Play from '../../assets/img/play.svg';
import Stop from '../../assets/img/stop.svg';
import FileSelector from './FileSelector';

function Visualizer() {
    const ref = useRef(null);
    const [showFileSelector, setShowFileSelector] = useState(false);
    const [gcode, setGcode] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [ready, message, send] = useContext(Context);

    const startJob = () => fileName && Job.run(fileName);
    const abortJob = () => {
        Job.abort();
        setFileName(null);
        setGcode(null);
    };

    const loadSelectedFile = async file => {
        setFileName(file.name);
        const { data } = await Files.getFile(file.name);
        setGcode(new Gcode(data));
    };

    useEffect(() => {
        const loadGcode = async () => {
            const { name, data } = await Files.getLatestFile(send);

            if (name && data) {
                setFileName(name);
                setGcode(new Gcode(data));
            } else {
                setFileName(null);
                setGcode(null);
            }
        };
        if (ready) {
            if (Files.hasNewFile(message)) {
                loadGcode();
            }
        }
    }, [ready, message, send]);

    useEffect(() => {
        if (!gcode) {
            return;
        }

        const scene = new Scene(ref);
        scene.drawPlane();
        scene.draw(gcode);
        scene.init();
        scene.animate();

        return () => scene.cleanUp(ref);
    }, [gcode]);
    return (
        <Grid x={10} y={6}>
            <FileSelector
                show={showFileSelector}
                onClose={() => setShowFileSelector(false)}
                onChange={file => loadSelectedFile(file)}
            />
            <div className='visualizer'>
                {fileName && gcode
                    ? (
                        <>
                            <div className="visualizer-info">
                                <h2>{fileName}</h2>
                            </div>
                            <div className='visualizer-controls'>
                                <Button icon={Play} variant='success' onClick={startJob} />
                                <Button icon={Stop} variant='danger' onClick={abortJob} />
                            </div>
                        </>
                    ) : (
                        <>
                            {!showFileSelector && (
                                <div className='visualizer-load-file'>
                                    <h2>No file loaded</h2>
                                    <Grid x={2} y={0.8}>
                                        <Button label='Select File' labelSize='sm' onClick={() => setShowFileSelector(true)} />
                                    </Grid>
                                </div>
                            )}
                        </>
                    )}
            </div>
            <div ref={ref} style={{ height: '100%', width: '100%' }}></div>
        </Grid>
    );
}

export default Visualizer;
