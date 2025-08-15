import './App.css'

import Topbar from './components/Topbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  const BASE_WIDTH = 1521
  const BLEED = 16
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed left-0 top-0" style={{ width: '100dvw' }}>
        <ScaleContainer width={BASE_WIDTH - 2 * BLEED} height={91}>
          <div style={{ marginLeft: -BLEED, width: BASE_WIDTH }}>
            <Topbar />
          </div>
        </ScaleContainer>
      </div>
    </div>
  )
}

export default App
