import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Topbar from './components/Topbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4">
      <ScaleContainer width={1521} height={91}>
        <Topbar />
      </ScaleContainer>
    </div>
  )
}

export default App
