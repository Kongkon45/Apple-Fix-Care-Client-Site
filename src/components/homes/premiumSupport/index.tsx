import React from "react";

const PremiumSupport = () => {
  return (
    <div className="lg:flex py-10">
      <div className="lg:w-2/5 w-full lg:mx-12 lg:p-0 p-6">
        <h2 className="text-4xl text-black font-bold my-10">
          Premium Support with Samsung Care+
        </h2>
        <h5 className="text-md font-bold text-black">
          Powerful Protection for your Galaxy life covers Drops, Spills, and
          Mechanical Breakdown
        </h5>
        <ul className="list-disc list-inside ">
          <li className="text-sm my-3">$29 Same day cracked screen repairs</li>
          <li className="text-sm my-3">Next Business Day Replacements</li>
          <li className="text-sm my-3">24/7 Tech Expert</li>
          <li className="text-sm my-3">
            Samsung Genuine Parts and Certified Technicians
          </li>
        </ul>
        <div className="flex gap-5">
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Buy today
        </button>
        <button className="text-xs py-2 px-4 rounded-xl underline text-black font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Learn more
        </button>
        </div>
      </div>
      <div className="lg:w-3/5 w-full lg:mr-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/6mT0hmG/premium-support-with-care-plus.webp" alt="convenience" />
      </div>
    </div>
  );
};

export default PremiumSupport;
