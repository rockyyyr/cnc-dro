import { useState, useEffect } from 'react';
import Grid from '../Grid';
import Button from '../../components/Button';
import Modal from '../Modal';

import Backspace from '../../assets/img/backspace.svg';
import Clear from '../../assets/img/clear.svg';
import Cancel from '../../assets/img/cancel.svg';

function Numpad({ show, initial, onChange, onClose }) {
    const [value, setValue] = useState(initial || null);
    const addToValue = nextValue => setValue(`${value || ''}${nextValue}`);

    const buttons = [
        ['1', '2', '3', { icon: Backspace, onClick: () => setValue(value.slice(0, -1)) }],
        ['4', '5', '6', { icon: Clear, onClick: () => setValue(null) }],
        ['7', '8', '9', { icon: Cancel, onClick: () => close() }],
        ['.', '0', { label: 'Enter', onClick: () => onChange(parseFloat(value)), size: 2 }],
    ];

    const labelSize = value => value.match(/^[0-9|.]+$/) ? 'lg' : 'sm';

    useEffect(() => {
        if (show) {
            setValue(initial || null);
        } else {
            setValue(null);
        }
    }, [show, initial]);

    const close = () => {
        setValue(null);
        onClose();
    };

    const renderButton = (button, key) => {
        if (button === '') {
            return null;
        }
        if (typeof button === 'string') {
            return (
                <Grid key={key}>
                    <Button
                        label={button}
                        labelSize={labelSize(button)}
                        onClick={() => addToValue(button)}
                    />
                </Grid>
            );
        } else if (typeof button === 'object') {
            return (
                <Grid key={key} x={button.size || 1}>
                    <Button
                        icon={button.icon}
                        label={button.label}
                        onClick={button.onClick}
                    />
                </Grid>
            );
        }
        return null;
    };

    return (
        <Modal
            show={show}
            onClose={() => close()}
        >
            <Grid x={4}>
                <Button label={value} disabled />
            </Grid>
            {buttons.map((row, index) => (
                <div key={index} className="flex-row">
                    {row.map((button, i) => renderButton(button, i))}
                </div>
            ))}
        </Modal>
    );
};

export default Numpad;
