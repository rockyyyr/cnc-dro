import { useState, useEffect } from 'react';
import Grid from '../Grid';
import Button from '../../components/Button';
import Modal from '../Modal';

export default function Keyboard({ show, initial, onChange, onClose }) {
    const [value, setValue] = useState(initial || null);
    const addToValue = nextValue => setValue(`${value || ''}${nextValue}`);

    const enter = {
        label: 'enter',
        onClick: () => value && onChange(value),
        size: 1.5,
    };

    const backspace = {
        label: 'del',
        onClick: () => setValue(value.slice(0, -1)),
        size: 1,
    };

    const blank = size => ({ blank: true, size: size || 1 });

    const buttons = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', backspace],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        [blank(0.5), 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', enter],
        [' ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '?', '='],
    ];

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
                        labelSize={'sm'}
                        onClick={() => addToValue(button)}
                    />
                </Grid>
            );
        } else if (typeof button === 'object') {
            return (
                <Grid key={key} x={button.size || 1}>
                    {button.label && (
                        <Button
                            label={button.label}
                            onClick={button.onClick}
                            labelSize={'sm'}
                        />
                    )}
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
            <Grid x={13}>
                <Button label={value} disabled labelSize='sm' />
            </Grid>
            {buttons.map((row, index) => (
                <div key={index} className="flex-row">
                    {row.map((button, i) => renderButton(button, i))}
                </div>
            ))}
        </Modal>
    );
};

