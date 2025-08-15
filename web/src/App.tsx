import { useRef } from 'react'
import './App.css'

import Topbar from './components/Topbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  const BASE_WIDTH = 1521
  const LEFT_BLEED = 16
  const RIGHT_BLEED = 24
  const innerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed left-0 top-0" style={{ width: '100dvw' }}>
        <ScaleContainer width={BASE_WIDTH + LEFT_BLEED + RIGHT_BLEED} height={91}>
          <div style={{ marginLeft: -LEFT_BLEED, width: BASE_WIDTH }}>
            <Topbar />
          </div>
        </ScaleContainer>
      </div>
    </div>
  )
}

export default App
