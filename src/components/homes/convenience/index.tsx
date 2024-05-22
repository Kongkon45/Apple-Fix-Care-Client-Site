import React from 'react'
const Convenience = () => {
  return (
    <div className='lg:flex '>
        <div className='lg:w-2/5 w-full lg:mx-12 lg:p-0 p-6'>
            <h2 className='text-4xl text-black font-bold my-10'>Convenience</h2>
            <ul className="list-disc list-inside ">
                <li className='text-sm my-3'>#1 Service Center Network Coverage in the US for mobile devices.[1]</li>
                <li className='text-sm my-3'>Start your fix with a click by easily scheduling an appointment online or creating a mail-in repair request online.</li>
                <li className='text-sm my-3'>We offer repair help at home with our &ldquo;we come to you&ldquo; service, for an additional $30 service fee.</li>
                <li className='text-sm my-3'>With our mail-in repair, we provide a QR code that can be used at The UPS Store locations to package and ship to Samsung at no cost to you.</li>
            </ul>
        </div>
        <div className='lg:w-3/5 w-full lg:mr-6 lg:p-0 p-6'>
            <img src="https://i.ibb.co/TqCRFdq/convenience-pc.webp" alt="convenience" />
        </div>
    </div>
  )
}

export default Convenience