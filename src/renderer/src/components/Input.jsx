import '../assets/input.css';
import Button from './Button';
import { useNumpad } from '../util/Numpad';
import Grid from '../util/Grid';

export default function Input({ label, value, onChange, labelSize = 'sm', inputWidth = 2, labelWidth = 1 }) {
    const { show } = useNumpad();

    const showNumpad = () => show({
        onChange: newValue => onChange(newValue)
    });

    return (
        <div className="flex-row">
            <Grid x={labelWidth} style={{ paddingRight: 0 }}>
                <Button label={label} labelSize={labelSize} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            </Grid>
            <Grid x={inputWidth} style={{ paddingLeft: 0 }}>
                <Button outline label={value} onClick={showNumpad} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
            </Grid>
        </div>
    );
}
