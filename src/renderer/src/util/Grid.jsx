import '../assets/grid.css';


const totalHeightPixels = 550;
const totalWidthPixels = 1920;
const rows = 6;
const columns = 20;
const cellHeight = Math.floor(totalHeightPixels / rows);
const cellWidth = Math.floor(totalWidthPixels / columns);

function Grid({ x = 1, y = 1, children, style, noPad = false }) {
    const height = cellHeight * y;
    const width = cellWidth * x;

    const options = {};

    if (noPad) {
        options.padding = 0;
    }

    return (
        <div className='grid' style={{
            height,
            width,
            maxHeight: height,
            maxWidth: width,
            ...options,
            ...style,
        }}>
            {children}
        </div>
    );
}

export default Grid;
