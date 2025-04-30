import { useContext, useEffect } from 'react';
import { Context } from '../lib/FluidNC';
import { toast, ToastContainer } from 'react-toastify';

import '../assets/notification.css';
import Cancel from '../assets/img/cancel.svg';

const ignoreMessages = [
    'Caution Unlocked'
];

function CloseButton({ closeToast }) {
    return (
        <i onClick={closeToast} className='notification-close-button-container'>
            <img src={Cancel} className='notification-close-button' />
        </i>
    );
}

function Notification() {
    const { notification } = useContext(Context);

    useEffect(() => {
        if (notification && !ignoreMessages.includes(notification.value)) {
            toast(notification.value || notification.level, {
                autoClose: 5000,
                hideProgressBar: true,
                className: `notification-${notification.level?.toLowerCase()}`
            });
        }

    }, [notification]);

    return (
        <ToastContainer closeButton={CloseButton} />
    );
}

export default Notification;
