import './App.css'

import Topbar from './components/Topbar'
import LowerTopbar from './components/LowerTopbar'
import ScaleContainer from './components/ScaleContainer'
import EditorBackground from './components/EditorBackground'
import CloseToolbar from './components/CloseToolbar'
import LeftToolbar from './components/LeftToolbar'
import Interlink from './components/Interlink'

function App() {
  const BASE_WIDTH = 1521
  const BLEED = 16
  const LOWER_SHIFT_X = BLEED + 6
  const TOTAL_TOPBAR_HEIGHT = 91 + 34
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-white">
      <div className="fixed left-0 top-0" style={{ width: '100dvw' }}>
        <ScaleContainer width={BASE_WIDTH - 2 * BLEED} height={91 + 34}>
          <div style={{ marginLeft: -BLEED, width: BASE_WIDTH, position: 'relative', height: 91 + 34 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: BASE_WIDTH, height: 91 }}>
              <Topbar />
            </div>
            <div style={{ position: 'absolute', top: 91, left: LOWER_SHIFT_X, width: BASE_WIDTH, height: 34 }}>
              <LowerTopbar />
            </div>
          </div>
        </ScaleContainer>
      </div>
      <div className="fixed left-[6px] right-[6px]" style={{ top: TOTAL_TOPBAR_HEIGHT + 6, bottom: 6, zIndex: 0 }}>
        <EditorBackground />
        <div className="absolute size-14" style={{ left: 33, bottom: 20, transform: 'scale(0.85)', transformOrigin: 'bottom left' }}>
          <CloseToolbar />
        </div>
        <div className="absolute" style={{ left: 20, bottom: 80, width: 86, height: 624, transform: 'scale(0.85)', transformOrigin: 'bottom left' }}>
          <LeftToolbar />
        </div>
        <div className="absolute" style={{ left: 20, top: 20, width: 101, height: 44 }}>
          <Interlink />
        </div>
      </div>
    </div>
  )
}

export default App
