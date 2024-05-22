import React from 'react'

const Contact_Banner = () => {
    
  return (
   <div className='bg-[#EEEEEE] mx-6 rounded-xl'>
    <div className='lg:flex gap-10 items-center lg:pl-24 lg:px-0 p-4 mb-4'>
        <div className='lg:w-3/5 w-full'> 
        <h5 className="text-md font-bold text-black">
        We&apos;re here for you
        </h5>
        <h2 className="text-4xl font-bold text-black mb-6">
        Contact Samsung Support
        </h2>
        <p className="text-xs my-4 text-justify">
        Contact us online through chat and get support from an expert on your computer, mobile device or tablet. Support is also available on your mobile device through the Samsung Members App.
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Get support
        </button>
        </div>
        <div className='lg:w-2/5 w-full'>
            <img src="https://i.ibb.co/Lk5ytmD/contact-us-pc-2x.webp" alt="samsung support" />
        </div>
    </div>
   </div> 
  )
}

export default Contact_Banner