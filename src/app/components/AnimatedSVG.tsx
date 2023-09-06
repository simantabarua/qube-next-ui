"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";

export const AnimatedSVG = () => {
  useEffect(() => {
    function animatePath(pathId: string): void {
      const path = document.getElementById(pathId) as SVGPathElement | null;

      if (!path) {
        console.error(`Path element with ID "${pathId}" not found.`);
        return;
      }

      const length = path.getTotalLength();
      path.style.transition = path.style.webkitTransition = "none";
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = String(length);
      path.getBoundingClientRect();
      path.style.transition = path.style.webkitTransition =
        "stroke-dashoffset 5s ease-in-out";
      path.style.strokeDashoffset = "0";
    }

    animatePath("path1");
    animatePath("path2");
    animatePath("path3");
    animatePath("path4");
    animatePath("path5");
    animatePath("path6");
  }, []);
  return (
    <div className="max-h-screen w-full absolute  bottom-0 md:inset-0  -mt-5  ">
      <div className="relative h-fit w-full ">
        <svg
          className="-z-10 mx-auto"
          width="100%"
          height="90%"
          viewBox="0 0 1920 996"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path1"
            d="M1797 0.5V80C1797 126.392 1758.89 164 1712.5 164V164C1666.11 164 1628 201.608 1628 248V771C1628 817.392 1590.39 855 1544 855H1043C996.608 855 959 892.608 959 939V995.5"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          ></path>
          <path
            id="path2"
            d="M1528 855H1920"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="392"
            strokeDashoffset="392"
          ></path>
          <path
            id="path3"
            d="M1709 164H1920"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="211"
            strokeDashoffset="211"
          ></path>
          <path
            id="path4"
            d="M122.744 0.5V80C122.744 126.392 160.676 164 207.068 164V164C253.46 164 291.392 201.608 291.392 248V771C291.392 817.392 329 855 375.392 855H875C921.392 855 959 892.608 959 939V995.5"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          ></path>
          <path
            id="path5"
            d="M391.184 855H-0.00056982"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="391"
            strokeDashoffset="391"
          ></path>
          <path
            id="path6"
            d="M210.561 164H-0.000316679"
            stroke="#E6E9F1"
            strokeWidth="3"
            strokeDasharray="211"
            strokeDashoffset="211"
          ></path>
        </svg>
        <div className="absolute bottom-0 left-1/2 -ml-5 mb-5">
          <ChevronDownIcon className=" bg-white text-gray-500  h-10 w-10 animate-bounce rounded-full border " />
        </div>
      </div>
    </div>
  );
};
