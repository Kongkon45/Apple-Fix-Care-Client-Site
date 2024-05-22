import React from "react";

const Award = () => {
  return (
    <div className="lg:flex items-center gap-10  bg-[#002e63] text-white py-6 px-10 rounded-xl mx-6 mb-10">
      <div className="lg:w-2/3 w-full">
        <h3 className="text-3xl font-bold">ACSI® 2023 Award Winner</h3>
        <h5 className="text-sm mt-2 mb-4">
          Samsung has been ranked #1 in the USA for Customer Satisfaction among
          5G devices in 2023.[2]
        </h5>
        <button className="text-xs py-2 px-4 rounded-xl bg-white text-black font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Learn more
        </button>
      </div>
      <div className="lg:w-1/3 w-full lg:mt-0 mt-6">
        <img className="w-36 h-24" src="https://i.ibb.co/p1HTs8j/acsi-logo-RGB-hi-res-2048x1527.jpg" alt="award-img" />
      </div>
    </div>
  );
};

export default Award;
