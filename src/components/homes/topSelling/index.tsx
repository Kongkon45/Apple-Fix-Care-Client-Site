"use client";
import products from "@/products.json";
import batteryData from "@/battery.json";
import cables from "@/cables.json";
import headphones from "@/headphones.json";
import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewProduct = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center my-4">
        <span className="text-[#f96331]">Top</span> Selling
      </h2>
      <Tabs defaultValue="case and protection" className="w-full">
        <div className="lg:w-1/2 w-full mx-auto">
        <TabsList >
          <TabsTrigger
            value="case and protection"
            className="px-4 py-2 font-bold text-gray-700 transition-colors duration-300 hover:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
          >
            Case And Protection
          </TabsTrigger>
          <TabsTrigger
            value="battery"
            className="px-4 py-2 font-bold text-gray-700 transition-colors duration-300 hover:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
          >
            Battery
          </TabsTrigger>
          <TabsTrigger
            value="headphones and speaker"
            className="px-4 py-2 font-bold text-gray-700 transition-colors duration-300 hover:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
          >
            Headphones And Speaker
          </TabsTrigger>
          <TabsTrigger
            value="power and cables"
            className="px-4 py-2 font-bold text-gray-700 transition-colors duration-300 hover:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
          >
            Power And Cables
          </TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value="case and protection">
          <Carousel
            plugins={[plugin.current]}
            className="w-full px-10 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {products.map((product: any) => {
                return (
                  <CarouselItem
                    key={product.id}
                    className="pl-5 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center px-2">
                          <div className="flex-col overflow-hidden">
                            <img
                              className="w-full h-auto mx-auto hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                              src={`${product.image}`}
                              alt={`${product.title}`}
                            />
                            <div className="text-center px-1">
                              <h3 className="text-sm font-bold ">
                                {product.title}
                              </h3>
                              <p className="lg:text-xl md:text-md text-sm font-semibold">
                                Price : ${product.price}
                              </p>
                              <div className="flex justify-between items-center gap-2 mt-2">
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-[10px] text-[#f96331] py-1 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700">
                                  View Details
                                </button>
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-full text-[#f96331] p-1 transition-all ease-in-out delay-500 duration-700">
                                  <IoMdAddCircle />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="battery">
          <Carousel
            plugins={[plugin.current]}
            className="w-full px-10 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {batteryData.map((product: any) => {
                return (
                  <CarouselItem
                    key={product.id}
                    className="pl-5 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center px-2">
                          <div className="flex-col overflow-hidden">
                            <img
                              className="w-full h-auto mx-auto hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                              src={`${product.image}`}
                              alt={`${product.title}`}
                            />
                            <div className="text-center px-1">
                              <h3 className="text-sm font-bold ">
                                {product.title}
                              </h3>
                              <p className="lg:text-xl md:text-md text-sm font-semibold">
                                Price : ${product.price}
                              </p>
                              <div className="flex justify-between items-center gap-2 mt-2">
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-[10px] text-[#f96331] py-1 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700">
                                  View Details
                                </button>
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-full text-[#f96331] p-1 transition-all ease-in-out delay-500 duration-700">
                                  <IoMdAddCircle />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="headphones and speaker">
          <Carousel
            plugins={[plugin.current]}
            className="w-full px-10 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {headphones.map((product: any) => {
                return (
                  <CarouselItem
                    key={product.id}
                    className="pl-5 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center px-2">
                          <div className="flex-col overflow-hidden">
                            <img
                              className="w-full h-auto mx-auto hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                              src={`${product.image}`}
                              alt={`${product.title}`}
                            />
                            <div className="text-center px-1">
                              <h3 className="text-sm font-bold ">
                                {product.title}
                              </h3>
                              <p className="lg:text-xl md:text-md text-sm font-semibold">
                                Price : ${product.price}
                              </p>
                              <div className="flex justify-between items-center gap-2 mt-2">
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-[10px] text-[#f96331] py-1 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700">
                                  View Details
                                </button>
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-full text-[#f96331] p-1 transition-all ease-in-out delay-500 duration-700">
                                  <IoMdAddCircle />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="power and cables">
          <Carousel
            plugins={[plugin.current]}
            className="w-full px-10 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {cables.map((product: any) => {
                return (
                  <CarouselItem
                    key={product.id}
                    className="pl-5 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center px-2">
                          <div className="flex-col overflow-hidden">
                            <img
                              className="w-full h-auto mx-auto hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
                              src={`${product.image}`}
                              alt={`${product.title}`}
                            />
                            <div className="text-center px-1">
                              <h3 className="text-sm font-bold ">
                                {product.title}
                              </h3>
                              <p className="lg:text-xl md:text-md text-sm font-semibold">
                                Price : ${product.price}
                              </p>
                              <div className="flex justify-between items-center gap-2 mt-2">
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-[10px] text-[#f96331] py-1 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700">
                                  View Details
                                </button>
                                <button className="lg:text-sm text-xs font-semibold hover:bg-[#f96331] hover:text-white border border-[#f96331] rounded-full text-[#f96331] p-1 transition-all ease-in-out delay-500 duration-700">
                                  <IoMdAddCircle />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewProduct;
