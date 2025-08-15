const imgRectangle99 = '/topbar-assets/961f433cc8422c9ce863af256c06a71672b9595b.svg'

export default function EditorBackground() {
  return (
    <div className="relative w-full h-full" data-name="background" data-node-id="10:213">
      {/* dotted pattern layer */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundImage: 'radial-gradient(#CFCFCF 0.8px, transparent 0.9px)',
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0',
          WebkitMaskImage: `url('${imgRectangle99}')`,
          maskImage: `url('${imgRectangle99}')`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'rgba(248,248,248,0.53)',
          WebkitMaskImage: `url('${imgRectangle99}')`,
          maskImage: `url('${imgRectangle99}')`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{ border: '2px solid rgba(255,255,255,0.62)' }}
        />
      </div>
    </div>
  )
}


