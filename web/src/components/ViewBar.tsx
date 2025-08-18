import { useState } from 'react'

const imgVector = '/topbar-assets/21a1a2b0d4344dfa761d263572ace05c0297c3a3.svg'
const imgSquareTextSquare1 = '/topbar-assets/dcad3e4780361763a4f329b4a8182c0491fc2418.svg'
const imgDotGrid = '/topbar-assets/f90563a42d1a36e638a28c7c0396c072af4d9eb9.svg'
const imgSquareGrid = '/topbar-assets/fe3d7df6d954237e6716a43339112ffb883bb510.svg'

type ViewMode = 'square' | 'dots' | 'basic'

export default function ViewBar() {
  const [mode, setMode] = useState<ViewMode>('dots')
  return (
    <div className="relative size-full" data-name="view" data-node-id="15:95">
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 151,
          height: 44,
          borderRadius: 27.867,
          backdropFilter: 'blur(17.65px)',
          background: 'rgba(229,229,229,0.5)'
        }}
        data-name="outline view"
        data-node-id="10:425"
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{ inset: 0, border: '1.858px solid #e9e9e9', borderRadius: 27.867 }}
        />
      </div>

      {/* square grid icon */}
      <button
        type="button"
        aria-label="Square grid"
        aria-pressed={mode === 'square'}
        onClick={() => setMode('square')}
        className="absolute"
        style={{ left: 12, top: 4, width: 22, height: 22, borderRadius: 6, outline: mode === 'square' ? '2px solid #1985cc' : 'none' }}
        data-name="square grid"
        data-node-id="10:427"
      >
        <img alt="" className="block max-w-none size-full" src={imgSquareGrid} />
      </button>

      {/* dot grid icon */}
      <button
        type="button"
        aria-label="Dot grid"
        aria-pressed={mode === 'dots'}
        onClick={() => setMode('dots')}
        className="absolute overflow-hidden"
        style={{ left: 57, top: 4, width: 22, height: 22, borderRadius: 6, outline: mode === 'dots' ? '2px solid #1985cc' : 'none' }}
        data-name="dot grid"
        data-node-id="10:430"
      >
        <img alt="" className="block max-w-none size-full" src={imgDotGrid} />
      </button>

      {/* basic view icon */}
      <button
        type="button"
        aria-label="Basic view"
        aria-pressed={mode === 'basic'}
        onClick={() => setMode('basic')}
        className="absolute overflow-hidden"
        style={{ left: 99, top: 0, width: 50, height: 24, borderRadius: 6, outline: mode === 'basic' ? '2px solid #1985cc' : 'none' }}
        data-name="basic view"
        data-node-id="10:437"
      >
        <div className="absolute" style={{ inset: 0 }} data-name="Group" data-node-id="10:438">
          <div className="absolute flex items-center justify-center" style={{ left: 0, top: 0, right: 24, bottom: 11 }}>
            <div style={{ width: 23.095, height: 23.053, rotate: '1.222deg' as any }}>
              <div className="relative size-full" data-name="Vector" data-node-id="10:439">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
          <div className="absolute overflow-hidden" style={{ left: 1, top: 0, right: 25, bottom: 11 }} data-name="square.text.square 1" data-node-id="10:440">
            <img alt="" className="block max-w-none size-full" src={imgSquareTextSquare1} />
          </div>
        </div>
      </button>
    </div>
  )
}


