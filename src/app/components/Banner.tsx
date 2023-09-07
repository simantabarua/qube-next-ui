import React from "react";
import { AnimatedSVG } from "./AnimatedSVG";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

export const Banner = () => {
  return (
    <>
      <AnimatedSVG />
      <div className="relative min-h-screen flex justify-center flex-col items-center gap-6 text-center">
        <p className="text-sm tracking-widest uppercase font-bold text-primary ">
          The Best RAndom service
        </p>
        <h2 className="text-4xl md:text-6xl z-30 max-w-3xl text-balance font-bold">
          Transforming Your Online Presence With Stunning Web Design
        </h2>
        <p className="max-w-lg text-lg text-gray-500">
          Hundreds of the most modern payment services available, connect them
          according to your needs - The API and data infrastructure we provide
          will easily help you.
        </p>
        <div className="flex gap-3 items-center">
          {/* First button */}
          <button
            className="
  px-4 py-2 md:px-8 md:py-4 md:w-52
  rounded-full text-white bg-primary cursor-pointer
  font-semibold shadow-xl hover:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-primary active:bg-blue-800
"
          >
            Book Consultation
          </button>

          {/* Second button */}
          <button
            className="
 px-4 py-2 md:px-8 md:py-4 md:w-52
  rounded-full text-primary border-primary shadow-xl border cursor-pointer
  font-semibold hover:bg-blue-100
  focus:outline-none focus:ring-2 focus:ring-primary active:bg-blue-200
"
          >
            Explore Profile
          </button>
        </div>
      </div>
    </>
  );
};
