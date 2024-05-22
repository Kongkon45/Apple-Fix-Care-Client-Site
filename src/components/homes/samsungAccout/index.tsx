import React from 'react'
const SamsungAccount = () => {
  return (
    <div className="lg:flex my-10">
        <div className='lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6'>
            <img src="https://i.ibb.co/wWt2Q3V/samsung-account-2x.webp" alt="Quality" />
        </div>
        <div className='lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6'>
            <h2 className='text-4xl font-bold text-black mt-10 mb-6'>Apple Fix-Care Account</h2>
            <h5 className='text-md font-bold text-black'>One account. Everything you need.</h5>
            <p className='text-sm my-4 text-justify'>With your Samsung account, you can access Samsung Care. Get product support, order tracking, exclusive rewards and offers, plus more with a single sign-on. Also, create tickets and get assistance with repairs with ease and convenience directly from your Samsung Care account.</p>
            <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Log in
        </button>
        </div>
    </div>
  )
}

export default SamsungAccount