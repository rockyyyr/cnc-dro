import { useEffect } from 'react';

import { Comms } from '../lib/FluidNC';
import { useKeyboard } from '../util/Numpad copy';

export default function Terminal({ show: showKeyboard, onClose }) {
    const { show } = useKeyboard();

    useEffect(() => {
        if (showKeyboard) {
            show({
                onChange: value => Comms.send(value),
                onClose
            });
        }
    }, [show, showKeyboard, onClose]);

    return null;
}