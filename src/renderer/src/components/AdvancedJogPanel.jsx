import { useContext, useEffect, useRef, useState } from 'react';
import { Context, States } from '../lib/FluidNC';
import Modal from '../util/Modal';
import Grid from '../util/Grid';
import Button from './Button';
import Spacer from '../util/Spacer';
import * as Jog from '../lib/jog';

const jogContainerSize = 487;
const actualMachineSize = 410;
const gridSize = jogContainerSize / 10;

const scaleFactor = jogContainerSize / actualMachineSize;
const toolRadius = 10;

export default function AdvancedJogPanel({ show, onClose }) {
    const { state, machinePosition } = useContext(Context);
    const [wait, setWait] = useState(false);
    const [targetPosition, setTargetPosition] = useState(null);
    const [showTarget, setShowTarget] = useState(false);
    const ref = useRef(null);

    const position = group => ({
        bottom: group.y * scaleFactor - toolRadius,
        left: group.x * scaleFactor - toolRadius
    });

    const jogPosition = position(machinePosition);

    const gridStyle = {
        width: jogContainerSize,
        height: jogContainerSize,
        backgroundSize: `${gridSize}px ${gridSize}px`,
    };

    const bufferMovement = (position, moveFunction = Jog.goTo) => {
        if (!wait) {
            moveFunction(position);
            setWait(true);
            setTimeout(() => setWait(false), 1000);
        }
    };

    function getClickPosition(e) {
        if (state === States.IDLE && !wait) {
            const rect = ref.current.getBoundingClientRect();
            const elementX = e.clientX - rect.left;
            const elementY = rect.bottom - e.clientY;

            const x = Math.round(elementX / scaleFactor);
            const y = Math.round(elementY / scaleFactor);

            // bufferMovement({ z: 10 });
            bufferMovement({ x, y, z: -10 }, Jog.goToMachine);
            setTargetPosition(position({ x, y }));
            setShowTarget(true);
        }
    }

    const buttons = [
        { label: 'XY0', onClick: () => bufferMovement({ x: 0, y: 0 }) },
        { label: 'ZUp', onClick: () => bufferMovement({ z: -10 }, Jog.goToMachine) }
    ];

    useEffect(() => {
        if (state === States.IDLE && showTarget) {
            setShowTarget(false);
            setTimeout(() => setTargetPosition(null), 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <Modal show={show} onClose={onClose} style={{ overflow: 'hidden', paddingRight: 0 }} >
            {show && (
                <Grid x={6} y={5} noPad style={{ justifyContent: 'space-around' }}>
                    <div className='flex-col flex-start' style={{ height: '100%' }}>
                        {buttons.map((button, index) => (
                            <Grid key={index}>
                                <Button
                                    label={button.label}
                                    labelSize='sm'
                                    onClick={button.onClick}
                                />
                            </Grid>
                        ))}
                    </div>
                    <Spacer x={1} y={5} />
                    <div className='advanced-jog-machine'>
                        <div
                            ref={ref}
                            onClick={getClickPosition}
                            className='advanced-jog-machine-grid'
                            style={gridStyle}
                        >
                            <div className='advanced-jog-position' style={jogPosition}></div>
                            <div className={`advanced-jog-target ${showTarget ? 'advanced-jog-target-visible' : ''}`} style={targetPosition}></div>
                        </div>
                    </div>
                </Grid>
            )}
        </Modal >
    );
}