import { useState, createContext, useCallback } from 'react';
import Numpad from './Numpad';

const NumpadContext = createContext({
    show: () => { },
    hide: () => { },
});

export function NumpadProvider({ children }) {
    const [options, setOptions] = useState({ show: false, initial: null, onChange: null });

    const show = useCallback(({ initial = null, onChange }) => {
        setOptions({ show: true, initial, onChange });
    }, []);

    const hide = useCallback(() => {
        setOptions(opts => ({ ...opts, show: false }));
    }, []);

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
        <NumpadContext.Provider value={{ show, hide }}>
            {children}
            <Numpad
                show={options.show}
                initial={options.initial}
                onChange={handleSubmit}
                onClose={hide}
            />
        </NumpadContext.Provider>
    );
}

export default NumpadContext;