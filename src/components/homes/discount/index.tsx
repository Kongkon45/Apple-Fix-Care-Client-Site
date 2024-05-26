import Image from "next/image";
import React from "react";

const Discount = () => {
  return (
    <div className="p-12">
      <div className="relative w-full h-[200px]">
        <Image
          src="https://i.ibb.co/cg48r8s/Discount.jpg"
          alt="discount image"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white py-4 px-12">
          <h3 className="text-4xl font-bold">Save $10 on Your Fix</h3>
          <p className="mt-2 text-lg">Sign up, Save $10 on Your First $80+ Order!</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
