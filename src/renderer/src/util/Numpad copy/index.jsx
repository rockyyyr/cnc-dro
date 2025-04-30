import { useContext } from 'react';
import KeyboardContext from './Context';

export function useKeyboard() {
    return useContext(KeyboardContext);
}
