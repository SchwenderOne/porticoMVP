const imgArrowUpAndDownTextHorizontal1 = '/topbar-assets/a752aa24e9750fdf32cb0845fe06439b64bbf4e0.svg'
const imgVector = '/topbar-assets/b14e2be829a45070957ba2301792e56477f24ac8.svg'
const imgTextAligncenter1 = '/topbar-assets/857fbe3555bca5ebfa9e49f3fd0c1661f3072f19.svg'
const imgDistributeVerticalCenter1 = '/topbar-assets/61f0c648a480b8547bde2abef5084d8812396bf1.svg'
const imgListBullet1 = '/topbar-assets/2ce6fb7ff47547b4771b9a0c9925c00779e53b6a.svg'
const imgEllipsis1 = '/topbar-assets/3a9c4419406debff05d8aaa07fd1696d70268133.svg'
const imgDotSquare2 = '/topbar-assets/1d9272b6ca8ca63e8b959a0212fb3df322784526.svg'
const imgVector1 = '/topbar-assets/38dc7c1e1c713241a73101adb878168d6ea86234.svg'
const imgVector2 = '/topbar-assets/e26cfe668956cd1cc95f3b8d6ff56f59e45878b0.svg'
const imgGroup29 = '/topbar-assets/5ad825c50a07567837186a0cd08073132f45bd6f.svg'
const imgGroup2 = '/topbar-assets/50864725b699af4126779f8b92f04e4307967b04.svg'
const imgGroup = '/topbar-assets/c33c16fe8d906d54e55b524b018e543780984093.svg'
const imgGroup32 = '/topbar-assets/1d1a78336c3bbe8d5c12fa6c6408d764758f7c37.svg'
const imgFrame = '/topbar-assets/6f8a04242277d3bf1a6ca0a51a9438d87399e7e6.svg'

import { memo } from 'react'

function FloatingToolbarInner() {
  return (
    <div className="relative" style={{ width: 862.611, height: 55.398 }} data-name="floating toolbar" data-node-id="35:397">
      {/* background */}
      <div className="absolute" style={{ left: 0, top: 0, width: 862.611, height: 55.398, borderRadius: 27.867, backdropFilter: 'blur(17.65px)', background: 'rgba(229,229,229,0.5)' }}>
        <div aria-hidden className="absolute pointer-events-none" style={{ inset: 0, border: '1.858px solid #e9e9e9', borderRadius: 27.867 }} />
      </div>
      {/* left input chip */}
      <div className="absolute" style={{ left: 9, top: 8, width: 190.817, height: 38.984 }}>
        <div
          className="absolute"
          style={{ left: 0, top: 0, width: '100%', height: '100%', borderRadius: 24.622, background: 'rgba(255,255,255,0.25)', border: '1.026px solid rgba(130,130,130,0.15)' }}
        />
        <div className="absolute" style={{ left: 12.77, top: 19 }}>
          <div style={{ color: '#4d4d4d', fontSize: 18.578, lineHeight: '20px', transform: 'translateY(-50%)' }}>Inter</div>
        </div>
        <div className="absolute" style={{ right: 12, top: 18, width: 4.924, height: 9.233, transform: 'rotate(90deg)' }}>
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
      {/* icons temporarily removed for stepwise implementation */}
      {/* separator between font and size */}
      <div className="absolute" style={{ left: 218.52, top: 17.44, width: 2.052, height: 21.365, background: 'rgba(130,130,130,0.25)' }} />
      {/* icon group to the right of text size (Figma node 35:449) */}
      <div className="absolute" style={{ left: 352.91, top: 16, width: 125, height: 24, zIndex: 100 }}>
        <div className="relative" style={{ width: '100%', height: '100%' }}>
          {/* brush icon */}
          <img alt="" style={{ position: 'absolute', left: 0.43, top: 0, width: 20.036, height: 18 }} src={imgGroup} />
          {/* thin color bar centered under brush */}
          <div style={{ position: 'absolute', left: 0, top: 12, width: 20.036, height: 3, display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
            <img alt="" style={{ width: 3, height: 20, transform: 'rotate(90deg)', transformOrigin: 'center center' }} src={imgGroup2} />
          </div>
          {/* the wide control to the right */}
          <img alt="" style={{ position: 'absolute', left: 43.09, top: 0.41, width: 81.046, height: 23.596 }} src={imgGroup29} />
        </div>
      </div>
      {/* separators flanking the icon group */}
      <div className="absolute" style={{ left: 330, top: 17.44, width: 2.052, height: 21.365, background: 'rgba(130,130,130,0.25)', zIndex: 90 }} />
      <div className="absolute" style={{ left: 498, top: 17.44, width: 2.052, height: 21.365, background: 'rgba(130,130,130,0.25)', zIndex: 90 }} />
      <div className="absolute" style={{ left: 760, top: 17.44, width: 2.052, height: 21.365, background: 'rgba(130,130,130,0.25)', zIndex: 90 }} />
      {/* next icon group (node 35:404) */}
      <div className="absolute" style={{ left: 512, top: 18.41, width: 226, height: 21.365, zIndex: 100 }}>
        <img alt="" style={{ position: 'absolute', left: 0, top: 0, width: 21.544, height: 18.466 }} src={imgTextAligncenter1} />
        <img alt="" style={{ position: 'absolute', left: 40.01, top: 0, width: 25.647, height: 18.466 }} src={imgListBullet1} />
        <img alt="" style={{ position: 'absolute', left: 84.13, top: 0, width: 26.673, height: 18.466 }} src={imgArrowUpAndDownTextHorizontal1} />
        <img alt="" style={{ position: 'absolute', left: 129.27, top: 0, width: 23.596, height: 18.466 }} src={imgDistributeVerticalCenter1} />
        <img alt="" style={{ position: 'absolute', left: 171.33, top: 1.03, width: 21.365, height: 21.365 }} src={imgVector} />
        <img alt="" style={{ position: 'absolute', left: 206.2, top: 7.18, width: 19.658, height: 4.257 }} src={imgEllipsis1} />
      </div>
      {/* final right-side icons (node 35:436) */}
      <div className="absolute" style={{ left: 782.142, top: 17.44, width: 57.227, height: 21.365, zIndex: 100 }}>
        <img alt="" style={{ position: 'absolute', left: 0, top: 0, width: 21.365, height: 21.365 }} src={imgVector1} />
        <img alt="" style={{ position: 'absolute', left: 37.96, top: 0, width: 19.267, height: 18.903 }} src={imgDotSquare2} />
      </div>
      {/* text size group – immediately to the right of separator */}
      <div className="absolute" style={{ left: 228.5, top: 8, width: 62.061, height: 39.014 }}>
        <img alt="" className="block max-w-none size-full" src={imgGroup32} />
        <img alt="" style={{ position: 'absolute', left: 68, top: 11, width: 17.44, height: 17.44 }} src={imgFrame} />
      </div>
    </div>
  )
}

export default memo(FloatingToolbarInner)
