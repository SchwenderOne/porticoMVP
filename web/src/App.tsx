import './App.css'

import Topbar from './components/Topbar'
import LowerTopbar from './components/LowerTopbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  const BASE_WIDTH = 1521
  const BLEED = 16
  const LOWER_SHIFT_X = BLEED + 6
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
    </div>
  )
}

export default App
