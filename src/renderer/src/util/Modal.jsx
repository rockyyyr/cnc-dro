import { useEffect } from 'react';
import '../assets/modal.css';

function Modal({ children, show, onClose, noPadding = false, style = {} }) {

    useEffect(() => {
        function handleClickOutside(e) {
            if (show && e.target.classList.contains('modal-container')) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [show, onClose]);

    const innerStyle = {
        ...style,
        padding: noPadding ? 0 : undefined,
    };

    return (
        <div className={`modal-container ${show ? 'modal-visible' : ''}`}>
            <div className='modal-inner' style={innerStyle}>
                {children}
            </div>
        </div>
    );
}

export default Modal;