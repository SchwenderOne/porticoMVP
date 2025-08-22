const imgInfo1 = '/topbar-assets/efbd669ac62fbfb51473b01d8b55450e91aeb6d1.svg'

export type InfoButtonProps = {
  ariaLabel?: string
  onClick?: () => void
}

export default function InfoButton({ ariaLabel = 'Open info panel', onClick }: InfoButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="relative size-full"
      data-name="info"
      data-node-id="10:310"
      style={{ appearance: 'none', background: 'transparent', border: 'none', padding: 0 }}
    >
      <div className="absolute inset-0">
        <div className="absolute rounded-[9999px]" style={{ left: '50%', top: '50%', width: 40, height: 40, transform: 'translate(-50%, -50%)', backdropFilter: 'blur(17.65px)', background: 'rgba(229,229,229,0.5)' }} />
        <div aria-hidden className="absolute pointer-events-none rounded-[9999px]" style={{ left: '50%', top: '50%', width: 40, height: 40, transform: 'translate(-50%, -50%)', border: '1.858px solid #e9e9e9' }} />
        <div className="absolute" style={{ left: '50%', top: '50%', width: 10, height: 18, transform: 'translate(-50%, -50%)', zIndex: 100 }}>
          <img alt="" className="block max-w-none size-full" src={imgInfo1} />
        </div>
      </div>
    </button>
  )
}


