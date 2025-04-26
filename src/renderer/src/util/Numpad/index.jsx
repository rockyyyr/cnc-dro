import { useContext } from 'react';
import NumpadContext from './Context';

export function useNumpad() {
    return useContext(NumpadContext);
}
