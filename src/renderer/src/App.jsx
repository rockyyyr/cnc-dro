
import Spacer from './util/Spacer';
import ButtonPanel from './components/ButtonPanel';
import PositionsPanel from './components/PositionsPanel';
import JogPanel from './components/JogPanel';
import Spindle from './components/Spindle';
import Limits from './components/Limits';
import Feeds from './components/Feeds';
import GCode from './components/Visualizer';
import UtilityPanel from './components/UtilityPanel';
import FluidNC from './lib/FluidNC';
import { NumpadProvider } from './util/Numpad/Context';

function App() {
    return (
        <FluidNC>
            <NumpadProvider>
                <div className="flex-row" style={{ margin: '0 3px' }}>
                    <ButtonPanel />
                    <Spacer x={0.5} y={6} vLine />
                    <div className="flex-col">
                        <PositionsPanel />
                        <JogPanel />
                    </div>
                    <Spacer x={0.5} y={6} vLine />
                    <div className="flex-col">
                        <UtilityPanel />
                        <Spacer y={0.5} x={4} hLine />
                        <Spindle />
                        <Spacer y={0.5} x={4} hLine />
                        <Feeds />
                    </div>
                    <Spacer x={0.5} y={6} vLine />
                    <GCode />
                </div>
            </NumpadProvider>
        </FluidNC>
    );
}

export default App;
