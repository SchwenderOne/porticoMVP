const imgGroup = '/topbar-assets/b8f063930b91f68a1a9f19aaefaa7f1f91e8fcc8.svg'
const imgConnectBackwards = '/topbar-assets/58e5c12a2d086fb1c28268c88934b1985b570eaf.svg'

export default function Interlink() {
  return (
    <div className="relative size-full" data-name="interlink" data-node-id="15:96">
      <div
        className="absolute backdrop-blur-[17.65px] backdrop-filter bg-[rgba(229,229,229,0.5)] h-11 left-0 rounded-[27.867px] top-0 w-[101px]"
        data-name="outline interlink"
        data-node-id="10:326"
      >
        <div
          aria-hidden
          className="absolute border-[#e9e9e9] border-[1.858px] border-solid inset-0 pointer-events-none rounded-[27.867px]"
        />
      </div>
      <div
        className="absolute h-[25px] left-[19px] overflow-clip top-2.5 w-5"
        data-name="pencil and ruler"
        data-node-id="10:327"
      >
        <div className="absolute inset-[0.85%_1.81%_-0.85%_-1.81%]" data-name="Group" data-node-id="10:328">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
      <div className="absolute inset-[22.73%_15.84%_20.45%_63.37%]" data-name="connect backwards" data-node-id="10:331">
        <img alt="" className="block max-w-none size-full" src={imgConnectBackwards} />
      </div>
    </div>
  )
}


