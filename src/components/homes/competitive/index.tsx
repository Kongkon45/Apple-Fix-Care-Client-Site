import React from 'react'

const Competitive = () => {
  return (
    <div className='lg:flex '>
        <div className='lg:w-2/5 w-full lg:mx-12 lg:p-0 p-6'>
            <h2 className='text-4xl text-black font-bold my-10'>Speed & Competitive pricing</h2>
            <ul className="list-disc list-inside ">
                <li className='text-sm my-3'>Our Samsung experts offer competitive pricing on out-of-warranty repairs, like screen replacements, faulty charger ports, camera issues and more.</li>
                <li className='text-sm my-3'>Get same-day, in-store repairs for most devices, or we&apos;ll come to you with a prior appointment at 3pm or before and for Galaxy S21 Models and Up.</li>
                <li className='text-sm my-3'>Our experts can finish most walk-ins within two hours.</li>
            </ul>
        </div>
        <div className='lg:w-3/5 w-full lg:mr-6 lg:p-0 p-6'>
            <img src="https://i.ibb.co/3Bcb5cK/speed-and-pricing-2x.webp" alt="convenience" />
        </div>
    </div>
  )
}

export default Competitive