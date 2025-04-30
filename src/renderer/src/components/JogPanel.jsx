import { useState } from 'react';
import '../assets/jog-panel.css';
import Button from './Button';
import Grid from '../util/Grid';

import ArrowUp from '../assets/img/arrow-up.svg';
import ArrowDown from '../assets/img/arrow-down.svg';
import ArrowLeft from '../assets/img/arrow-left.svg';
import ArrowRight from '../assets/img/arrow-right.svg';
import ArrowUpLeft from '../assets/img/arrow-up-left.svg';
import ArrowUpRight from '../assets/img/arrow-up-right.svg';
import ArrowDownLeft from '../assets/img/arrow-down-left.svg';
import ArrowDownRight from '../assets/img/arrow-down-right.svg';

import * as Jog from '../lib/jog';
import { useNumpad } from '../util/Numpad';
import AdvancedJogPanel from './AdvancedJogPanel';

export default function JogPanel() {
    const [jogValue, setJogValue] = useState(5);
    const [showPanel, setShowPanel] = useState(false);
    const { show } = useNumpad();

    const showNumpad = () => show({
        onChange: value => value && setJogValue(value)
    });

    const row1 = [
        { icon: ArrowUpLeft, onClick: () => Jog.leftUp(jogValue) },
        { icon: ArrowUp, onClick: () => Jog.up(jogValue) },
        { icon: ArrowUpRight, onClick: () => Jog.rightUp(jogValue) },
        { label: 'Z+', onClick: () => Jog.zUp(jogValue) }
    ];

    const row2 = [
        { icon: ArrowLeft, onClick: () => Jog.left(jogValue) },
        { label: 'XY0', onClick: () => Jog.xyZero(), labelSize: 'xs' },
        { icon: ArrowRight, onClick: () => Jog.right(jogValue) },
        { label: jogValue, onClick: showNumpad, labelSize: 'xs', outline: true }
    ];

    const row3 = [
        { icon: ArrowDownLeft, onClick: () => Jog.leftDown(jogValue) },
        { icon: ArrowDown, onClick: () => Jog.down(jogValue) },
        { icon: ArrowDownRight, onClick: () => Jog.rightDown(jogValue) },
        { label: 'Z-', onClick: () => Jog.zDown(jogValue) }
    ];

    return (
        <div>
            <AdvancedJogPanel
                show={showPanel}
                onClose={() => setShowPanel(false)}
            />
            <div className='flex-row'>
                {row1.map((button, index) => (
                    <Grid key={index} x={button.width || 1}>
                        <Button icon={button.icon} label={button.label} onClick={button.onClick} />
                    </Grid>
                ))}
            </div>
            <div className='flex-row'>
                {row2.map((button, index) => (
                    <Grid key={index} x={button.width || 1}>
                        <Button icon={button.icon} label={button.label} onClick={button.onClick} labelSize={button.labelSize} outline={button.outline} />
                    </Grid>
                ))}
            </div>
            <div className='flex-row'>
                {row3.map((button, index) => (
                    <Grid key={index} x={button.width || 1}>
                        <Button icon={button.icon} label={button.label} onClick={button.onClick} />
                    </Grid>
                ))}
            </div>
        </div>
    );
}
