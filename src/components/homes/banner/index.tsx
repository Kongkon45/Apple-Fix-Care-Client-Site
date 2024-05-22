import React from 'react';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(https://i.ibb.co/k5YRZmb/mobile-care-banner-pc.webp)` }}
    >
      <h5 className="text-xl font-bold mb-2">Mobile</h5>
      <h2 className="lg:text-5xl text-4xl font-bold">Samsung Care</h2>
    </div>
  );
};

export default Banner;
