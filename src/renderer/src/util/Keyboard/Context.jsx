import { useState, createContext, useCallback } from 'react';
import Keyboard from './Keyboard';

const KeyboardContext = createContext({
    show: () => { },
    hide: () => { },
});

export function KeyboardProvider({ children }) {
    const [options, setOptions] = useState({ show: false, initial: null, onChange: null });

    const show = useCallback(({ initial = null, onChange, onClose }) => {
        setOptions({ show: true, initial, onChange, onClose });
    }, []);

    const hide = useCallback(() => {
        if (typeof options.onClose === 'function') {
            options.onClose();
        }
        setOptions(opts => ({ ...opts, show: false }));
    }, [options]);

    const handleSubmit = useCallback(
        (value) => {
            if (typeof options.onChange === 'function') {
                options.onChange(value);
            }
            hide();
        },
        [options, hide]
    );

    return (
        <KeyboardContext.Provider value={{ show, hide }}>
            {children}
            <Keyboard
                show={options.show}
                initial={options.initial}
                onChange={handleSubmit}
                onClose={hide}
            />
        </KeyboardContext.Provider>
    );
}

export default KeyboardContext;