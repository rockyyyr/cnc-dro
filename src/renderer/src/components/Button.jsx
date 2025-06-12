import { useState } from 'react';
import '../assets/button.css';

const CLICK_BUFFER_TIMEOUT = 1000;

export default function Button({ label, onClick, icon, invertIcon, iconSize = 50, disabled, actuallyDisable, labelSize = 'lg', background = 'dark', outline, children, style, variant, className, bold, bufferClick }) {
    const [buffered, setBuffered] = useState(false);

    let fontSize;
    switch (labelSize) {
        case 'xxs':
            fontSize = 19;
            break;
        case 'xs':
            fontSize = 22;
            break;
        case 'sm':
            fontSize = 30;
            break;
        case 'md':
            fontSize = 37;
            break;
        case 'lg':
            fontSize = 45;
            break;
        default:
            fontSize = 45;
    }

    const classes = [className];

    if (background === 'dark') {
        classes.push('button-dark');
    }
    if (background === 'light') {
        classes.push('button-light');
    }
    if (!disabled) {
        classes.push('button-clickable');
    }
    if (outline) {
        classes.push('button-outline');
    }

    if (variant) {
        switch (variant) {
            case 'success':
                classes.push('button-success');
                break;
            case 'warning':
                classes.push('button-warning');
                break;
            case 'danger':
                classes.push('button-danger');
                break;
            case 'info':
                classes.push('button-info');
                break;
        }
    }

    const clickHandler = () => {
        if (!onClick || buffered || actuallyDisable || disabled) {
            return;
        }

        if (bufferClick) {
            onClick();
            setBuffered(true);
            setTimeout(() => setBuffered(false), CLICK_BUFFER_TIMEOUT);

        } else {
            onClick();
        }
    };

    return (
        <button className={`button ${classes.join(' ')}`} onClick={clickHandler} style={style} disabled={actuallyDisable && disabled}>
            {icon
                ? (<img src={icon} alt={label} style={{ width: iconSize, height: iconSize, filter: invertIcon ? 'invert(1)' : null }} />)
                : label !== undefined && label !== null
                    ? (<div style={{ fontSize, fontWeight: bold ? 'bold' : '' }}>{label}</div>)
                    : children
            }
        </button>
    );
}
