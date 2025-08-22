const imgVector = '/topbar-assets/21a1a2b0d4344dfa761d263572ace05c0297c3a3.svg'
const imgSquareTextSquare1 = '/topbar-assets/dcad3e4780361763a4f329b4a8182c0491fc2418.svg'
const imgDotGrid = '/topbar-assets/f90563a42d1a36e638a28c7c0396c072af4d9eb9.svg'
const imgSquareGrid = '/topbar-assets/fe3d7df6d954237e6716a43339112ffb883bb510.svg'

export type ViewBarProps = {
  value?: 'grid' | 'dots' | 'basic'
  onChange?: (next: 'grid' | 'dots' | 'basic') => void
  ariaLabel?: string
}

export default function ViewBar({ value = 'grid', onChange, ariaLabel = 'Change view mode' }: ViewBarProps) {
  const isSelected = (key: 'grid' | 'dots' | 'basic') => value === key
  const handle = (key: 'grid' | 'dots' | 'basic') => () => onChange?.(key)

  return (
    <div className="relative size-full" role="group" aria-label={ariaLabel} data-name="view" data-node-id="15:95">
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
        <div aria-hidden className="absolute pointer-events-none" style={{ inset: 0, border: '1.858px solid #e9e9e9', borderRadius: 27.867 }} />
      </div>

      {/* square grid icon (left) */}
      <button
        type="button"
        aria-label="Square grid view"
        aria-pressed={isSelected('grid')}
        onClick={handle('grid')}
        className="absolute focus:outline-none"
        style={{ left: 27, top: 11, width: 22, height: 22 }}
        data-name="square grid"
        data-node-id="10:427"
      >
        <img alt="" className="block max-w-none size-full" src={imgSquareGrid} />
      </button>

      {/* dot grid icon (center) */}
      <button
        type="button"
        aria-label="Dot grid view"
        aria-pressed={isSelected('dots')}
        onClick={handle('dots')}
        className="absolute overflow-hidden focus:outline-none"
        style={{ left: 65, top: 11, width: 22, height: 22 }}
        data-name="dot grid"
        data-node-id="10:430"
      >
        <img alt="" className="block max-w-none size-full" src={imgDotGrid} />
      </button>

      {/* basic view icon (right) exact fit 22x22 */}
      <button
        type="button"
        aria-label="Basic view"
        aria-pressed={isSelected('basic')}
        onClick={handle('basic')}
        className="absolute overflow-hidden focus:outline-none"
        style={{ left: 103, top: 11, width: 22, height: 22 }}
        data-name="basic view"
        data-node-id="10:437"
      >
        <img alt="" className="absolute" style={{ left: 0, top: 0, width: 22, height: 22 }} src={imgSquareTextSquare1} />
        <div className="absolute" style={{ left: 0, top: 0, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: '95%', height: '95%', transform: 'rotate(1.222deg)' }} src={imgVector} />
        </div>
      </button>
    </div>
  )
}


