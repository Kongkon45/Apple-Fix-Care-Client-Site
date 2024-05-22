import React from 'react'

const Greener_Future = () => {
  return (
    <div>
        <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/gWrcpwL/greener-future-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6" >
        <h2 className="text-4xl font-bold text-black mt-6">
        Move toward a greener future
        </h2>
        <h5 className="text-md font-bold text-black">
        From our products to our practices, sustainability is our mission.
        </h5>
        <p className="text-sm my-4 text-justify">
        More than just keeping phones in working order, our repair services keep them out of landfills. Every device has made a difference, with 1.2 billion pounds of e-waste recycled annually across our 1,700 drop-off locations - as evidenced by our seven+ consecutive Sustainable Materials Management Gold Tier Champion awards.
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          find a drop of location
        </button>
      </div>
    </div>
    </div>
  )
}

export default Greener_Future