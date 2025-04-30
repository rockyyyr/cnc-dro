import { useEffect, useRef, useState, useContext } from "react";
import Gcode from './Gcode';
import Scene from './Scene';
import { Files, Comms, Context, States } from '../../lib/FluidNC';
import Button from '../Button';
import Grid from '../../util/Grid';
import * as Job from '../../lib/job';

import '../../assets/visualizer.css';
import Play from '../../assets/img/play.svg';
import Stop from '../../assets/img/stop.svg';
import FileSelector from './FileSelector';

function Visualizer() {
    const ref = useRef(null);
    const { workPosition, state } = useContext(Context);
    const [scene, setScene] = useState(null);
    const [showFileSelector, setShowFileSelector] = useState(false);
    const [gcode, setGcode] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [spindleSpeed, setSpindleSpeed] = useState(0);
    const [tools, setTools] = useState(null);
    const [disablePlay, setDisablePlay] = useState(false);
    const [disableStop, setDisableStop] = useState(false);

    const newMessage = Comms.message;

    const startJob = () => {
        console.log('Starting job');

        Job.run(fileName);
    };
    const abortJob = () => {
        setFileName(null);
        setGcode(null);
    };

    const loadSelectedFile = async file => {
        setFileName(file.name);
        const { data } = await Files.getFile(file.name);
        setGcode(new Gcode(data));
    };

    const loadGcode = async () => {
        const { name, data } = await Files.getLatestFile();

        if (name && data) {
            setFileName(name);
            setGcode(new Gcode(data));
        } else {
            setFileName(null);
            setGcode(null);
        }
    };

    useEffect(() => {
        const scene = new Scene(ref);
        scene.init();
        scene.drawPlane();
        scene.drawAxes();
        scene.animate();
        setScene(scene);

        return () => scene.cleanUp(ref);
    }, []);

    useEffect(() => {
        if (Files.hasNewFile(newMessage)) {
            loadGcode();
        }
    }, [newMessage]);

    useEffect(() => {
        if (state === States.IDLE) {
            setDisablePlay(false);
        } else {
            setDisablePlay(true);
        }

        if (state === States.RUN) {
            setDisableStop(true);
        } else {
            setDisableStop(false);
        }

    }, [state]);


    useEffect(() => {
        if (scene && workPosition) {
            scene.needsRender = true;
            if (scene.tool) {
                scene.updateTool(workPosition);
            } else {
                scene.drawTool(workPosition);
            }
        }
    }, [scene, workPosition]);

    useEffect(() => {
        if (gcode) {
            scene.draw(gcode);

            if (gcode.spindleSpeed) {
                setSpindleSpeed(gcode.spindleSpeed);
            }
            if (gcode.tools) {
                setTools(gcode.tools);
            }

        } else {
            scene?.disposeGcode();
            setSpindleSpeed(null);
            setTools(null);
        };

    }, [gcode, scene]);
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
                                <h3>{fileName}</h3>
                                {tools && (
                                    tools.map((tool, index) => (
                                        <p key={index}>{tool.name} ({tool.diameter}mm)</p>
                                    ))
                                )}
                                {spindleSpeed && (<p>Spindle Speed: {spindleSpeed}rpm</p>)}
                            </div>
                            <div className='visualizer-controls'>
                                <Grid x={1.25} y={0.8}>
                                    <Button icon={Play} variant='success' disabled={disablePlay} actuallyDisable onClick={startJob} />
                                </Grid>
                                <Grid x={1.25} y={0.8}>
                                    <Button icon={Stop} variant='danger' onClick={abortJob} disabled={disableStop} actuallyDisable />
                                </Grid>
                            </div>
                        </>
                    ) : (
                        <>
                            {!showFileSelector && (
                                <div className='visualizer-load-file'>
                                    <Grid x={2} y={0.6}>
                                        <Button label='Select File' labelSize='xs' onClick={() => setShowFileSelector(true)} />
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
