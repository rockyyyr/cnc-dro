import Grid from './Grid';

function Spacer({ x, y, vLine, hLine }) {
    return (
        <Grid x={x} y={y} style={{ background: 'transparent', border: 'none' }}>
            {vLine && <hr style={{ width: 1, height: '100%' }} />}
            {hLine && <hr style={{ width: '100%', height: 1 }} />}
        </Grid>
    );
}

export default Spacer;