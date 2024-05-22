import React from 'react'

const Mail_service = () => {
  return (
    <div>
        <h2 className="text-4xl text-center font-bold text-black mt-10 mb-6">See how Samsung Care makes repairs work for you</h2>
        <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/Yb6L5ZT/mail-in-service-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6">
        <h2 className="text-4xl font-bold text-black mt-6">
        Mail-in service
        </h2>
        <h5 className="text-md font-bold text-black">
        Mail-in service offers a variety of screen repair solutions, like a screen re placement that uses fewer parts to repair your device at a lower cost.
        </h5>
        <p className="text-sm my-4 text-justify">
        Simply create your repair ticket in a few clicks via our online self-service portal, and request a box with a prepaid label to be shipped to you. Samsung uses 97%+ plastic-free packaging, sustainable forest certified (SFI) paper and 50%+ recycled content (PCR) shipping boxes for sending devices to customers after repair in Mail-In or if a box is requested by a customer.
        </p>
        <p className="text-sm my-4 text-justify">
        Or simply drop your phone off at your nearby UPS Store for one-stop packaging and shipping directly back to us.
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          start a Repair
        </button>
      </div>
    </div>
    </div>
  )
}

export default Mail_service