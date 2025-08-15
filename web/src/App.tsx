import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Topbar from './components/Topbar'
import ScaleContainer from './components/ScaleContainer'

function App() {
  const BASE_WIDTH = 1521
  const LEFT_BLEED = 16
  const [rightFudge, setRightFudge] = useState<number>(24)
  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const measureAndAdjust = () => {
      const el = innerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const visualWidth = (window.visualViewport?.width ?? window.innerWidth)
      const diff = Math.ceil(visualWidth - rect.right)
      if (diff > 0) {
        // Estimate current scale to convert post-scale diff to pre-scale width
        const currentPreScaleWidth = BASE_WIDTH + LEFT_BLEED + rightFudge
        const scale = rect.width / currentPreScaleWidth
        const preScaleNeeded = Math.ceil(diff / (scale || 1))
        if (preScaleNeeded > 0) setRightFudge(v => v + preScaleNeeded)
      }
    }

    measureAndAdjust()
    const ro = new ResizeObserver(() => measureAndAdjust())
    ro.observe(document.documentElement)
    window.addEventListener('resize', measureAndAdjust)
    window.addEventListener('orientationchange', measureAndAdjust)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measureAndAdjust)
      window.removeEventListener('orientationchange', measureAndAdjust)
    }
  }, [rightFudge])
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed left-0 top-0" style={{ width: '100dvw' }}>
        <ScaleContainer width={BASE_WIDTH + LEFT_BLEED + rightFudge} height={91}>
          <div ref={innerRef} style={{ marginLeft: -LEFT_BLEED, width: BASE_WIDTH }}>
            <Topbar />
          </div>
        </ScaleContainer>
      </div>
    </div>
  )
}

export default App
