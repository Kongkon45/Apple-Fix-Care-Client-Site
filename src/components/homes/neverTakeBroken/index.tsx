import React from "react";
import neverTakeBrokenData from "@/neverTakeBroken.json";
import Image from "next/image";
import Link from "next/link";

const NeverTakeBroken = () => {
  return (
    <div className="p-10">
      <div className="text-center">
        <h3 className="text-3xl font-bold ">Never take broken for an answer</h3>
        <p className="text-base py-6 font-normal">
          Get the instructions you need with quality repair parts and tools and
          the expertise of a robust community.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-6">
        {neverTakeBrokenData?.map((item, index) => {
          return (
            <div key={index} className="relative rounded-[8px] border shadow-lg">
              <Image
                src={item.image}
                alt="neverTakeData"
                width={200}
                height={200}
                className="w-full h-[200px] rounded-t-[8px]"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl py-5 font-semibold text-[111827]">
                  {item.title}
                </h4>
                <p className="text-base font-normal pb-14">{item.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 mx-4 overflow-hidden">
                <Link href='/'>
                <button className=" w-full bg-[#1975f1] py-2 rounded-[6px] text-white mt-3 mb-6 text-base font-semibold">
                  {item.btnText}
                </button>
                </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NeverTakeBroken;
