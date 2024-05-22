import React from 'react'

const SelfRepair = () => {
  return (
    <div>
        <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/JR4tPH3/self-repair-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6">
        <h2 className="text-4xl font-bold text-black mt-6">
        Self-Repair
        </h2>
        <h5 className="text-md font-bold text-black">
        We&apos;ve partnered with iFixit, the leading online repair community, to equip and empower our DIV-centric customers to take charge of their own mobile repairs - from replacing a phone screen to back glass or charging ports.
        </h5>
        <p className="text-sm my-4 text-justify">
        With helpful step-by-step guides, genuine Samsung parts and responsible recycling options at your disposal, you can truly take care with self-repair. This same service is also available through Samsung and our typical retail and service locations for the same convenient price.
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          learn more
        </button>
      </div>
    </div>
    </div>
  )
}

export default SelfRepair