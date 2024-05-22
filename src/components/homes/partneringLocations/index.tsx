import React from 'react'

const PartneringLocations = () => {
  return (
    <div>
        <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/znqF33r/partenering-locations-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full ;g:mx-6 lg:p-0 p-6">
        <h2 className="text-4xl font-bold text-black mt-6">
        Partnering Locations
        </h2>
        <h5 className="text-md font-bold text-black">
        We offer another option for receiving service through our partnering Independent Service Providers (ISPs).
        </h5>
        <p className="text-sm my-4 text-justify">
        Repairs are done at Wireless Industry Service Excellence-certified locations by CTIA-certified, trained technicians- using Samsung genuine parts that are OEM manufactured and authorized, with a wide variety of out-of-warranty services eligible for repair.
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Learn more
        </button>
      </div>
    </div>
    </div>
  )
}

export default PartneringLocations