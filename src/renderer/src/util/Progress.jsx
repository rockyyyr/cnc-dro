import ProgressBar from '@ramonak/react-progress-bar';

export default function Progress({ completed, maxCompleted, show }) {
    return show && (
        <ProgressBar
            className='visualizer-progress'
            height={5}
            width={885}
            baseBgColor='#000'
            bgColor='#52c41a'
            completed={completed}
            maxCompleted={maxCompleted}
            isLabelVisible={false}
        />
    );
}