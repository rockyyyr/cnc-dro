import '../assets/button.css';

export default function Button({ label, onClick, icon, disabled, actuallyDisable, labelSize = 'lg', background = 'dark', outline, children, style, variant, className, bold }) {
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

    return (
        <button className={`button ${classes.join(' ')}`} onClick={onClick} style={style} disabled={actuallyDisable && disabled}>
            {icon
                ? (<img src={icon} alt={label} style={{ width: 50, height: 50 }} />)
                : label !== undefined && label !== null
                    ? (<div style={{ fontSize, fontWeight: bold ? 'bold' : '' }}>{label}</div>)
                    : children
            }
        </button>
    );
}
