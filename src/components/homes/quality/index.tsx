import React from "react";

const Quality = () => {
  return (
    <div className="lg:flex my-10">
      <div className="lg:w-3/5 w-full  lg:mx-6 lg:p-0 p-6">
        <img src="https://i.ibb.co/PtdSgzC/Quality-2x.webp" alt="Quality" />
      </div>
      <div className="lg:w-2/5 w-full  lg:mx-6 lg:p-0 p-6">
        <h2 className="text-4xl font-bold text-black my-6">Quality</h2>
        <ul className="list-disc list-inside ">
          <li className="text-sm my-2">
            Get access to over 10,000 Samsung Mobile certified repair
            technicians in the U.S. who have gone through a 28-hour training
            certification that equips them with the skills to conduct a mobile
            repair safely and ensure repairs are done right.
          </li>
          <li className="text-sm my-2">
            We conduct a 70-point diagnostic test to identify and troubleshoot
            problems with your device and repair what&apos;s needed to get the
            product back into working order.
          </li>
          <li className="text-sm my-2">
            Repairs are made with genuine Samsung parts and proprietary repair
            tools designed specifically for Samsung products.
          </li>
          <li className="text-sm my-2">
            After the repair is done, we test the product to ensure features
            like water resistance are intact and your device&apos;s software is
            calibrated and up to date.
          </li>
          <li className="text-sm my-2">
            Repairs are backed by a 90-day warranty or for the remainder of the
            device warranty.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quality;
