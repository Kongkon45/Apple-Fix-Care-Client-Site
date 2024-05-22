import React from "react";
const Service = () => {
  return (
    
    <div>
        <h2 className="text-4xl text-center font-bold text-black mt-10 mb-6">See how Samsung Care makes repairs work for you</h2>
        <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/2ZGWdMD/walk-in-service-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full lg:mx-6 lg:p-0 p-6">
        <h2 className="text-4xl font-bold text-black mt-10 mb-6">
          Walk-in Service
        </h2>
        <h5 className="text-md font-bold text-black">
        Enjoy peace of mind with a touch of convenience through same-day service at any of our 1,000+ Authorized Service Centers and Samsung service locations.
        </h5>
        <p className="text-sm my-4 text-justify">
        The Samsung Care Network has enough locations across the country that 75% of Americans have access to one of the participating locations. At those locations, most repairs are made within two hours with a prior appointment at 3pm or before and for Galaxy S21 Models and Up.
        </p>
        <p className="text-sm my-4 text-justify">
        Both in-warranty and out-of-warranty service-from replacing a cracked screen to repairing a faulty charging port-are included, and all requires are handled by certified technicians using genuine Samsung parts. 
        </p>
        <button className="text-xs py-2 px-4 rounded-xl bg-black text-white font-bold hover:bg-[#555555] hover:text-white hover:scale-105 transform transition-transform duration-300">
          Find Location
        </button>
      </div>
    </div>
    </div>
  );
};

export default Service;
