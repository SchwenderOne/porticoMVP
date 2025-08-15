const imgMinusCircle1 = '/topbar-assets/83aff62f7dbf3e791ec602693dfb12b4bf14a8fb.svg'

export default function CloseToolbar() {
  return (
    <div className="relative size-full" data-name="close toolbar" data-node-id="12:86">
      <div
        className="absolute backdrop-blur-[13.7px] backdrop-filter bg-[rgba(229,229,229,0.5)] left-0 rounded-[27.867px] size-14 top-0"
        data-node-id="35:937"
      >
        <div
          aria-hidden
          className="absolute border-[#e9e9e9] border-[1.858px] border-solid inset-0 pointer-events-none rounded-[27.867px]"
        />
      </div>
      <div
        className="absolute h-[26.348px] left-[15px] overflow-clip top-[15px] w-[26.694px]"
        data-name="minus.circle 1"
        data-node-id="10:338"
      >
        <img alt="" className="block max-w-none size-full" src={imgMinusCircle1} />
      </div>
    </div>
  )
}


