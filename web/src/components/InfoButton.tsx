const imgLayerButton = '/topbar-assets/79df808f16146fa178841697f9d8ef791098503f.svg'
const imgInfo1 = '/topbar-assets/efbd669ac62fbfb51473b01d8b55450e91aeb6d1.svg'

export default function InfoButton() {
  return (
    <div className="relative size-full" data-name="info" data-node-id="10:310">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute inset-[-73.81%_-74.36%]">
              <img alt="" className="block max-w-none size-full" src={imgLayerButton} />
            </div>
          </div>
          <div className="absolute rounded-[27.867px]" style={{ width: 9, height: 17 }}>
            <div className="h-[17px] overflow-clip relative w-[9px]">
              <img alt="" className="block max-w-none size-full" src={imgInfo1} />
            </div>
            <div
              aria-hidden
              className="absolute border-[#e9e9e9] border-[1.858px] border-solid inset-0 pointer-events-none rounded-[27.867px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


