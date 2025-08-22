import './App.css'

import Topbar from './components/Topbar'
import LowerTopbar from './components/LowerTopbar'
import ScaleContainer from './components/ScaleContainer'
import EditorBackground from './components/EditorBackground'
import CloseToolbar from './components/CloseToolbar'
import LeftToolbar from './components/LeftToolbar'
import Interlink from './components/Interlink'
import InfoButton from './components/InfoButton'
import ZoomBar from './components/ZoomBar'
import ViewBar from './components/ViewBar'
import Layers from './components/Layers'
import FloatingToolbar from './components/FloatingToolbar'
import SwipeUp from './components/SwipeUp'
import {
  BASE_CANVAS_WIDTH,
  BLEED,
  TOPBAR_HEIGHT,
  LOWER_TOPBAR_HEIGHT,
  TOTAL_TOPBAR_HEIGHT,
  EDITOR_INSET,
  WIDGET_SCALE,
  RIGHT_RAIL_MARGIN,
  INFO_BUTTON_WIDTH,
  ZOOM_BAR_WIDTH,
  VIEW_BAR_WIDTH,
  GAP_INFO_TO_ZOOM_COMP,
  VIEW_BAR_OVERLAP_ADJUST,
  computeLowerShiftX,
} from '@constants/layout'

function App() {
  const LOWER_SHIFT_X = computeLowerShiftX()
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-white">
      <div className="fixed left-0 top-0" style={{ width: '100dvw' }}>
        <ScaleContainer width={BASE_CANVAS_WIDTH - 2 * BLEED} height={TOTAL_TOPBAR_HEIGHT}>
          <div style={{ marginLeft: -BLEED, width: BASE_CANVAS_WIDTH, position: 'relative', height: TOTAL_TOPBAR_HEIGHT }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: BASE_CANVAS_WIDTH, height: TOPBAR_HEIGHT }}>
              <Topbar />
            </div>
            <div style={{ position: 'absolute', top: TOPBAR_HEIGHT, left: LOWER_SHIFT_X, width: BASE_CANVAS_WIDTH, height: LOWER_TOPBAR_HEIGHT }}>
              <LowerTopbar />
            </div>
          </div>
        </ScaleContainer>
      </div>
      <div className="fixed" style={{ left: EDITOR_INSET, right: EDITOR_INSET, top: TOTAL_TOPBAR_HEIGHT + EDITOR_INSET, bottom: EDITOR_INSET, zIndex: 0 }}>
        <EditorBackground />
        {/* Floating toolbar: centered horizontally in editor area */}
        <div className="absolute" style={{ left: '50%', top: 20, width: 862.611, height: 55.398, transform: `translateX(-50%) scale(${WIDGET_SCALE})`, transformOrigin: 'top center' }}>
          <FloatingToolbar />
        </div>
        <div className="absolute size-14" style={{ left: 33, bottom: 20, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'bottom left' }}>
          <CloseToolbar />
        </div>
        <div className="absolute" style={{ left: 20, bottom: 80, width: 86, height: 624, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'bottom left' }}>
          <LeftToolbar />
        </div>
        <div className="absolute" style={{ left: 20, top: 20, width: 101, height: 44, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'top left' }}>
          <Interlink />
        </div>
        <div className="absolute" style={{ right: RIGHT_RAIL_MARGIN, top: 20, width: 101, height: 44, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'top right' }}>
          <Layers />
        </div>
        <div className="absolute" style={{ right: RIGHT_RAIL_MARGIN, bottom: 28, width: INFO_BUTTON_WIDTH, height: 25, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'bottom right' }}>
          <InfoButton />
        </div>
        <div className="absolute" style={{ right: RIGHT_RAIL_MARGIN + INFO_BUTTON_WIDTH + GAP_INFO_TO_ZOOM_COMP, bottom: 20, width: ZOOM_BAR_WIDTH, height: 44, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'bottom right' }}>
          <ZoomBar />
        </div>
        {/* Match visual gap with InfoButton↔ZoomBar by compensating for scale and right-anchored transform */}
        <div className="absolute" style={{ right: RIGHT_RAIL_MARGIN + INFO_BUTTON_WIDTH + GAP_INFO_TO_ZOOM_COMP + ZOOM_BAR_WIDTH - VIEW_BAR_OVERLAP_ADJUST, bottom: 20, width: VIEW_BAR_WIDTH, height: 44, transform: `scale(${WIDGET_SCALE})`, transformOrigin: 'bottom right' }}>
          <ViewBar />
        </div>
        {/* SwipeUp: centered at the bottom edge of the screen */}
        <div className="absolute" style={{ left: '50%', bottom: -EDITOR_INSET, width: 81, height: 50, transform: `translateX(-50%) scale(${WIDGET_SCALE})`, transformOrigin: 'bottom center', zIndex: 10 }}>
          <SwipeUp />
        </div>
      </div>
    </div>
  )
}

export default App
