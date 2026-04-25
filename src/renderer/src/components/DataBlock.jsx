import '../assets/data-block.css';
import Button from './Button';

export default function DataBlock({ label, value, small, variant, unit, secondaryValue, secondaryLabel, buttonLabel, onClick = () => { } }) {

    const hasButton = onClick && buttonLabel;

    return (
        <div className="data-block">
            <Button disabled variant={variant} className="data-block-label">{label}</Button>
            <div className={`data-block-value-container ${hasButton ? 'data-block-value-container-w-button' : ''}`} onClick={!hasButton ? onClick : () => { }}>
                <div className="data-block-value-wrapper">
                    <div className={`data-block-value ${small ? 'data-block-value-small' : ''}`}>{value}</div>
                    {secondaryValue && (
                        <div className="flex-row space-between">
                            <div className="data-block-secondary data-block-secondary-label">{secondaryLabel}</div>
                            <div className="data-block-secondary data-block-secondary-value">
                                {secondaryValue}
                                <span className="data-block-secondary data-block-secondary-units">mm/min</span>
                            </div>
                        </div>
                    )}
                </div>
                {unit && <div className="data-block-unit">{unit}</div>}
            </div>
            {hasButton && (
                <Button className="data-block-button" label={buttonLabel} labelSize='sm' onClick={onClick} />
            )}
        </div>
    );
}
