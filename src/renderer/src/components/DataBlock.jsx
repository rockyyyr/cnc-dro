import '../assets/data-block.css';
import Button from './Button';

export default function DataBlock({ label, value, variant, unit, secondaryValue, buttonLabel, onClick = false }) {

    const hasButton = onClick && buttonLabel;

    return (
        <div className="data-block">
            <Button disabled variant={variant} className="data-block-label">{label}</Button>
            <div className={`data-block-value-container ${hasButton ? 'data-block-value-container-w-button' : ''}`}>
                <div className="data-block-value-wrapper">
                    <div className="data-block-value">{value}</div>
                    {secondaryValue !== undefined && (
                        <div className="data-block-value data-block-secondary-value">{secondaryValue}</div>
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

