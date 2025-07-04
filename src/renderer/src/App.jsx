
import Spacer from './util/Spacer';
import ButtonPanel from './components/ButtonPanel';
import PositionsPanel from './components/PositionsPanel';
import JogPanel from './components/JogPanel';
import Spindle from './components/Spindle';
import Feeds from './components/Feeds';
import Visualizer from './components/Visualizer';
import UtilityPanel from './components/UtilityPanel';
import FluidNC from './lib/FluidNC';
import { NumpadProvider } from './util/Numpad/Context';
import { KeyboardProvider } from './util/Keyboard/Context';
import { TerminalContextProvider } from "react-terminal";
import Notification from './components/Notification';


function App() {
    return (
        <FluidNC>
            <TerminalContextProvider>
                <NumpadProvider>
                    <KeyboardProvider>
                        <Notification />
                        <div className="flex-row" style={{ margin: '0 3px' }}>
                            <ButtonPanel />
                            <Spacer x={0.2} y={6} vLine />
                            <div className="flex-col">
                                <PositionsPanel />
                                <JogPanel />
                            </div>
                            <Spacer x={0.2} y={6} vLine />
                            <div className="flex-col">
                                <UtilityPanel />
                                <Spacer y={0.25} x={4} hLine />
                                <Spindle />
                                <Spacer y={0.25} x={4} hLine />
                                <Feeds />
                            </div>
                            <Spacer x={0.2} y={6} vLine />
                            <Visualizer />
                        </div>
                    </KeyboardProvider>
                </NumpadProvider>
            </TerminalContextProvider>
        </FluidNC>
    );
}

export default App;
