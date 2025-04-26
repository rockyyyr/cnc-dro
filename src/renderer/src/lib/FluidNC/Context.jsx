import { createContext } from 'react';

const WebsocketContext = createContext(false, null, () => { });
export default WebsocketContext;
