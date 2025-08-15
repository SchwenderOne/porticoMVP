import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Topbar from './components/Topbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed left-0 top-0 w-screen">
        <ScaleContainer width={1521} height={91}>
          <div style={{ marginLeft: -14, width: 1521 + 28 }}>
            <Topbar />
          </div>
        </ScaleContainer>
      </div>
    </div>
  )
}

export default App
