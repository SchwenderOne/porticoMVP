const imgInfo1 = '/topbar-assets/efbd669ac62fbfb51473b01d8b55450e91aeb6d1.svg'

export default function InfoButton() {
  return (
    <div className="relative size-full" data-name="info" data-node-id="10:310">
      <div className="absolute inset-0">
        {/* frosted circular background sized to container */}
        <div className="absolute inset-0 rounded-[9999px]" style={{ backdropFilter: 'blur(17.65px)', background: 'rgba(229,229,229,0.5)' }} />
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[9999px]" style={{ border: '1.858px solid #e9e9e9' }} />
        {/* centered info glyph */}
        <div className="absolute" style={{ left: '50%', top: '50%', width: 9, height: 17, transform: 'translate(-50%, -50%)' }}>
          <img alt="" className="block max-w-none size-full" src={imgInfo1} />
        </div>
      </div>
    </div>
  )
}


