import { useState, useContext } from 'react';
import { Comms, Commands, Constants, Context } from '../lib/FluidNC';
import * as Jog from '../lib/jog';
import Grid from '../util/Grid';
import Modal from '../util/Modal';
import Button from './Button';


export default function VacuumPanel({ show, onClose }) {
    const { enableVacuumMode, vacuumMode } = useContext(Context);
    const [disabled, setDisabled] = useState(true);

    const beginSetup = () => {
        Comms.send(Commands.HOME);
        Comms.send(Jog.goToMachine({ x: Constants.Dimensions.Machine.x / 2, y: Constants.Dimensions.Machine.x / 2, z: 0 }));
        setDisabled(false);
    };

    return (
        <Modal
            show={show}
            onClose={onClose}
        >
            <h1 style={{ paddingLeft: 20 }}>Vacuum Mode</h1>
            <br />
            <div className='flex-row'>
                <Grid x={4} y={3}>
                    <div className='flex-col space-between' style={{ height: '100%' }}>
                        <p style={{ padding: 20 }}>
                            To beging vacuum mode setup, the machine will home be homed, then parked so the vacuum attachment can be mounted.
                        </p>
                        <Grid x={4}>
                            <Button label='Begin Setup' labelSize='sm' onClick={beginSetup} />
                        </Grid>
                    </div>
                </Grid>
                <Grid x={4} y={3}>
                    <div className='flex-col space-between' style={{ height: '100%' }}>
                        <p style={{ padding: 20 }}>
                            After vacuum mount is installed, machine position home will be adjusted and soft limits applied.
                        </p>
                        <Grid x={4}>
                            <Button
                                label={vacuumMode ? 'Disable Vacuum Mode' : 'Enable Vacuum Mode'}
                                labelSize='sm'
                                disabled={disabled}
                                actuallyDisable={disabled}
                                onClick={() => enableVacuumMode(!vacuumMode)}
                            />
                        </Grid>
                    </div>
                </Grid>
            </div>
        </Modal>
    );
};