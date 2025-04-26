import Modal from '../util/Modal';

export default function AdvancedJogPanel({ show, onClose }) {
    return (
        <Modal show={show} onClose={onClose}>
            <h2>Advanced Jog Panel</h2>
            <p>This is the advanced jog panel.</p>
        </Modal>
    );
}