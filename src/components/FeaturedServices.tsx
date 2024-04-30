"use client";
import React from "react";
import servicesData from "@/Data/services.json";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";
import Link from "next/link";
interface Services {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;

  isFeatured: boolean;
  image: string;
}
function FeaturedServices() {
  const featuredServices = servicesData.services.filter(
    (service: Services) => service.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 overflow-hidden ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get from the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredServices.map((service: Services) => (
            <div key={service.id} className="flex justify-center ">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    src={service.image}
                    alt={service.image}
                    height="200"
                    width="400"
                    className="fill"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {service.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>
                  <Link href={`#`} className=" text-teal-600 ">
                    Book Now
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/services"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          {" "}
          View All Services
        </Link>
      </div>
    </div>
  );
}

export default FeaturedServices;
