import React from "react";
import alliesImages from "@/ourAllies.json";
import Image from "next/image";

const OurAllies = () => {
  // console.log(alliesImages)
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#212426] pt-4">Our Allies</h3>
        <p className="text-base font-normal text-[#1f2937] py-6">
          iFixit works with some manufacturers who are committed to making your
          stuff easier to fix.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {alliesImages?.map((item) => {
          return (
            <div key={item.id}>
              <Image
                src={item.image}
                alt="our allies image"
                width={200}
                height={200}
                className="w-full h-[150px] border-2 border-white hover:cursor-pointer hover:scale-105 duration-300 transition ease-in-out hover:shadow-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurAllies;
