const imgGroup = '/topbar-assets/83513c3d0199a2a68ced215a6ad48675552d031f.svg'
const imgSeperationLine = '/topbar-assets/2e0bcbd2f51d13577e1d2ebddff408d67a522a60.svg'
const imgVector = '/topbar-assets/649b0234b8e4362251ff7c7ee7ebd495744b53ad.svg'
const imgOutlineDevice = '/topbar-assets/4b79c6677c862494676bb124ef5bdb8491ace9c8.svg'
const imgPhone = '/topbar-assets/f653faee0f201b20a5605fa2e9eda4e87e4a3d1d.svg'
const imgIpad = '/topbar-assets/bb8aa11e06c364817661a1cbeeb2ad7ba5e542e5.svg'
const imgLaptop = '/topbar-assets/c21de27c933aecc43fc0912c68aba71150eeb029.svg'
const imgOutlineAAndF = '/topbar-assets/c4504fc68d7eecbbc21b2273edd9f93daf4c426f.svg'
const imgFunction = '/topbar-assets/bfd6a0fcafdf0d550418b7e32f1a6789c7b26b3d.svg'
const imgAccessibility = '/topbar-assets/59ebdcce41d2bbed4aeaf7aa505399c0f8cbb652.svg'

function Ask() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative size-full"
      data-name="ask"
      data-node-id="81:10117"
    >
      <div className="absolute contents inset-0" data-name="layers" data-node-id="10:276">
        <div className="absolute contents inset-0" data-name="layer button" data-node-id="10:277">
          <div className="absolute bg-[rgba(255,255,255,0.25)] inset-0 rounded-[24.622px]" data-node-id="10:278">
            <div
              aria-hidden="true"
              className="absolute border-2 border-[rgba(130,130,130,0.15)] border-solid inset-0 pointer-events-none rounded-[24.622px] shadow-[0px_0px_25.097px_0.988px_rgba(0,0,0,0.05)]"
            />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-3.5" data-name="Group" data-node-id="10:279">
        <img alt="" className="block max-w-none size-full" src={imgGroup} />
      </div>
      <div
        className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#343434] text-[16.363px] text-center text-nowrap tracking-[-0.1636px] w-[30px]"
        data-node-id="10:282"
      >
        <p className="adjustLetterSpacing block leading-[1.06]">Ask</p>
      </div>
    </div>
  )
}

function SeperationLine() {
  return (
    <div className="relative size-full" data-name="seperation line" data-node-id="12:88">
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-full top-0">
        <div className="flex-none">
          <button className="block cursor-pointer relative size-full" data-name="seperation line" data-node-id="10:271">
            <div className="absolute inset-[-1.39px_-6.52%]">
              <img alt="" className="block max-w-none size-full" src={imgSeperationLine} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function LowerTopbar() {
  return (
    <div className="relative size-full" data-name="filecard background 2" data-node-id="15:90">
      <div
        className="absolute box-border content-stretch flex flex-row gap-2 h-[34px] items-center justify-start left-[1380px] px-3 py-2 top-0 w-20"
        data-name="ask"
        data-node-id="81:10117"
      >
        <Ask />
      </div>
      <div className="absolute h-5 left-[246px] top-1.5 w-72" data-name="mockup for file place" data-node-id="15:93">
        <div
          className="absolute font-['Aeonik_Pro:Medium',_sans-serif] h-5 leading-[0] left-0 not-italic text-[#4d4d4d] text-[16px] text-left top-0 tracking-[-0.16px] w-[45px]"
          data-node-id="10:265"
        >
          <p className="adjustLetterSpacing block leading-[1.06]">Start</p>
        </div>
        <div
          className="absolute bg-clip-text bg-gradient-to-r blur-[4.3px] filter font-['Aeonik_Pro:Medium',_sans-serif] from-[#6a6a6a] h-5 leading-[0] left-[65px] mix-blend-exclusion not-italic opacity-[0.76] text-[16px] text-left to-[#00000005] top-0 tracking-[-0.16px] w-[223px]"
          data-node-id="10:266"
          style={{ WebkitTextFillColor: 'transparent' }}
        >
          <p className="adjustLetterSpacing block leading-[1.06]">Department determinant</p>
        </div>
        <div className="absolute inset-[20%_81.94%_35%_16.67%]" data-name="Vector" data-node-id="10:267">
          <div className="absolute inset-[-12.16%_-27.36%]">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="absolute h-[21.365px] left-[227px] top-[5px] w-0" data-name="seperation line" data-node-id="12:89">
        <SeperationLine />
      </div>
      <div className="absolute h-[34px] left-24 top-0 w-[113px]" data-name="device" data-node-id="15:92">
        <div className="absolute h-[34px] left-0 top-0 w-[113px]" data-name="outline device" data-node-id="10:252">
          <div className="absolute inset-[-76.72%_-23.08%]">
            <img alt="" className="block max-w-none size-full" src={imgOutlineDevice} />
          </div>
        </div>
        <div className="absolute inset-[17.65%_14.16%_22.17%_73.45%]" data-name="phone" data-node-id="10:253">
          <img alt="" className="block max-w-none size-full" src={imgPhone} />
        </div>
        <div className="absolute h-5 left-[54px] overflow-clip top-1.5 w-4" data-name="ipad" data-node-id="10:320">
          <img alt="" className="block max-w-none size-full" src={imgIpad} />
        </div>
        <div className="absolute h-[17px] left-[13px] overflow-clip top-2 w-7" data-name="laptop" data-node-id="10:257">
          <img alt="" className="block max-w-none size-full" src={imgLaptop} />
        </div>
      </div>
      <div className="absolute h-[34px] left-0 top-0 w-[87px]" data-name="accessibilty & function" data-node-id="15:91">
        <div className="absolute h-[34px] left-0 top-0 w-[87px]" data-name="outline a and f" data-node-id="10:239">
          <div className="absolute inset-[-76.72%_-29.98%]">
            <img alt="" className="block max-w-none size-full" src={imgOutlineAAndF} />
          </div>
        </div>
        <div
          className="absolute backdrop-blur-[3.4px] backdrop-filter h-3.5 left-12 overflow-clip top-[9px] w-[27px]"
          data-name="function"
          data-node-id="10:245"
        >
          <img alt="" className="block max-w-none size-full" src={imgFunction} />
        </div>
        <div
          className="absolute backdrop-blur-[3.4px] backdrop-filter h-[19px] left-[9px] overflow-clip top-[7px] w-5"
          data-name="accessibility"
          data-node-id="10:240"
        >
          <img alt="" className="block max-w-none size-full" src={imgAccessibility} />
        </div>
      </div>
    </div>
  )
}


