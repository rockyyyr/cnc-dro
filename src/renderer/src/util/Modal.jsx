import { useEffect } from 'react';
import '../assets/modal.css';

function Modal({ children, show, onClose }) {

    useEffect(() => {
        function handleClickOutside(e) {
            if (show && e.target.classList.contains('modal-container')) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [show, onClose]);

    return (
        <div className={`modal-container ${show ? 'modal-visible' : ''}`}>
            <div className='modal-inner'>
                {children}
            </div>
        </div>
    );
}

export default Modal;