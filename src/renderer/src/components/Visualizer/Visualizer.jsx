/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useContext } from "react";
import Gcode from '../../lib/Gcode';
import Scene from './Scene';
import { Files, Context, States } from '../../lib/FluidNC';
import Button from '../Button';
import Grid from '../../util/Grid';
import Progress from '../../util/Progress';
import * as Job from '../../lib/job';

import '../../assets/visualizer.css';
import Play from '../../assets/img/play.svg';
import Stop from '../../assets/img/stop.svg';
import FileSelector from './FileSelector';

const decToMinSec = dm => {
    let min = Math.floor(dm);
    let sec = Math.round((dm - min) * 60);
    if (sec === 60) { sec = 0; min += 1; }
    return `${min}:${String(sec).padStart(2, '0')}`;
};

export default function Visualizer() {
    const ref = useRef(null);

    const { state, message, line, workPosition, machinePosition, workOffset, setAir, setMist } = useContext(Context);
    const [scene, setScene] = useState(null);
    const [showFileSelector, setShowFileSelector] = useState(false);
    const [hasFilesLoaded, setHasFilesLoaded] = useState(false);
    const [gcode, setGcode] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [disablePlay, setDisablePlay] = useState(false);
    const [disableStop, setDisableStop] = useState(false);

    const startJob = () => Job.run(fileName);
    const abortJob = () => {
        Job.abort([setAir, setMist]);
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

        return () => scene.cleanUp(ref);
    }, []);

    useEffect(() => {
        if (workOffset) {
            if (gcode) {
                gcode.updateWorkOffset(workOffset);
                scene.draw(gcode);
            }
        }
    }, [workOffset.x, workOffset.y, workOffset.z]);

    useEffect(() => {
        if (Files.hasNewFile(message)) {
            loadGcode();
        }
    }, [message]);

    useEffect(() => {
        if (line) {
            if (gcode?.airEnableLine && line - gcode.airEnableLine < 5) {
                setAir(true);
            }
            if (gcode?.mistEnableLine && line - gcode.mistEnableLine < 5) {
                setMist(true);
            }
            if (gcode?.coolantDisableLine && gcode.coolantDisableLine - line < 3) {
                setAir(false);
                setMist(false);
            }
        }
    }, [line]);

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
        if (scene && workPosition && machinePosition) {
            scene.needsRender = true;
            if (scene.tool) {
                scene.updateTool({ ...machinePosition, z: workPosition.z });
            } else {
                scene.drawTool({ ...machinePosition, z: workPosition.z });
            }
        }
    }, [workPosition, machinePosition]);

    useEffect(() => {
        if (gcode) {
            scene.draw(gcode);

        } else {
            scene?.disposeGcode();
        };
    }, [gcode]);

    return (
        <Grid x={10} y={6} style={{ marginLeft: -22, height: 550, maxHeight: 550 }} noPad>
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
                                <Progress
                                    show={gcode.maxLineNumber && line !== null}
                                    completed={line}
                                    maxCompleted={gcode.maxLineNumber}
                                />
                                <h3>{fileName}</h3>
                                {(gcode.air || gcode.mist) && (
                                    <p>
                                        {gcode.air && <span style={{ paddingRight: 20 }} className='text-success'>Air</span>}
                                        {gcode.mist && <span className='text-info'>Mist</span>}
                                    </p>
                                )}
                                {gcode.tools && (<p>Tools: {gcode.tools.map(tool => `${tool.name}${tool.diameter ? ` (${parseFloat(tool.diameter).toFixed(2)})` : ''}`).join(', ')}</p>)}
                                {<p className={gcode.minZ < 0 ? 'text-warning' : 'text-success'}>Min Z: {gcode.minZ}</p>}
                                {gcode.spindleSpeed && (<p>Spindle: {gcode.spindleSpeed}rpm</p>)}
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
        </Grid >
    );
}
