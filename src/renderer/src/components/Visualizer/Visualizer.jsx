/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useContext } from "react";
import Gcode from '../../lib/Gcode';
import Scene from './Scene';
import { Files, Context, States } from '../../lib/FluidNC';
import Button from '../Button';
import Grid from '../../util/Grid';
import * as Job from '../../lib/job';

import '../../assets/visualizer.css';
import Play from '../../assets/img/play.svg';
import Stop from '../../assets/img/stop.svg';
import FileSelector from './FileSelector';

// import testGcode from '../../assets/test/threadedholes';

const decToMinSec = dm => {
    let min = Math.floor(dm);
    let sec = Math.round((dm - min) * 60);
    if (sec === 60) { sec = 0; min += 1; }
    return `${min}:${String(sec).padStart(2, '0')}`;
};

// const workOffset = {
//     x: 0,
//     y: 0,
//     z: 0,
// };

// const machinePosition = {
//     x: 382.638,
//     y: -4.65,
//     z: 15
// };

function Visualizer() {
    const ref = useRef(null);
    const { state, message, workOffset, machinePosition } = useContext(Context);
    const [scene, setScene] = useState(null);
    const [showFileSelector, setShowFileSelector] = useState(false);
    const [hasFilesLoaded, setHasFilesLoaded] = useState(false);
    const [gcode, setGcode] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [spindleSpeed, setSpindleSpeed] = useState(0);
    const [tools, setTools] = useState(null);
    const [disablePlay, setDisablePlay] = useState(false);
    const [disableStop, setDisableStop] = useState(false);

    const startJob = () => Job.run(fileName);
    const abortJob = () => {
        Job.reset();
        setFileName(null);
        setGcode(null);
    };

    const loadSelectedFile = async file => {
        const { data } = await Files.getFile(file.name);
        setFileName(file.name);
        setGcode(new Gcode(data, workOffset, machinePosition));
    };

    const loadGcode = async () => {
        const { name, data } = await Files.getLatestFile();

        if (name && data) {
            setFileName(name);
            setGcode(new Gcode(data, workOffset, machinePosition));
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

        // setGcode(new Gcode(testGcode, workOffset, machinePosition));
        // setFileName('test.gcode');

        return () => scene.cleanUp(ref);
    }, []);

    useEffect(() => {
        if (workOffset) {
            if (gcode) {
                gcode.updateWorkOffset(workOffset);
                scene.draw(gcode);
            }
        }
    }, [workOffset]);

    useEffect(() => {
        if (Files.hasNewFile(message)) {
            loadGcode();
        }
    }, [message]);

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
        if (scene && machinePosition) {
            scene.needsRender = true;
            if (scene.tool) {
                scene.updateTool(machinePosition);
            } else {
                scene.drawTool(machinePosition);
            }
        }
    }, [machinePosition]);

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
    }, [gcode]);

    return (
        <Grid x={10} y={6}>
            <FileSelector
                show={showFileSelector}
                onClose={() => setShowFileSelector(false)}
                onChange={file => loadSelectedFile(file)}
                onFilesLoaded={files => setHasFilesLoaded(files.length > 0)}
            />
            <div className='visualizer'>
                {fileName && gcode
                    ? (
                        <>
                            <div className="visualizer-info">
                                <h3>{fileName}</h3>
                                {tools && (<p>Tools: {tools.map(tool => `${tool.name}${tool.diameter ? ` (${parseFloat(tool.diameter).toFixed(2)})` : ''}`).join(', ')}</p>)}
                                {spindleSpeed && (<p>Spindle: {spindleSpeed}rpm</p>)}
                                {/* {gcode.length && (<p>Lines: {gcode.length}</p>)} */}
                                {gcode.durationMinutes && (<p>Duration: {decToMinSec(gcode.durationMinutes)}m</p>)}
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
                                        <Button
                                            label='Select File'
                                            labelSize='xs'
                                            disabled={!hasFilesLoaded}
                                            actuallyDisable={!hasFilesLoaded}
                                            onClick={() => setShowFileSelector(true)}
                                        />
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
