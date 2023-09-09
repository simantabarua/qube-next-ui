import Image from "next/image";
import React from "react";

import sliderSvg from "/public/slider-bg.svg";
interface Review {
  signature: string;
  avatar: string;
  evaluation: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { signature, avatar, evaluation } = review;

  return (
    <div className="relative h-full  lg:h-96  shadow-xl outline outline-blue-100  rounded-xl p-4 md:p-8 text-center space-y-4">
      <div className="w-20 h-20 absolute top-0 right-12">
        <svg
          width="101"
          height="55"
          viewBox="0 0 101 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 68482">
            <path
              id="Vector 13"
              d="M57.6535 42.4578C49.0794 24.5893 57.5861 6.7074 62.9112 0H88.9973C80.585 4.9903 75.9204 12.677 74.6397 15.8965C76.7428 14.7697 80.9085 14.7563 82.7285 14.8904C95.5087 16.8221 99.243 25.7564 99.5126 29.9821C102.263 43.3432 92.7046 50.4396 87.5817 52.3177C69.1394 57.9519 59.9452 48.092 57.6535 42.4578Z"
              stroke="#E6E9F1"
              strokeWidth="2"
            />
            <path
              id="Vector 14"
              d="M5.65347 42.4578C-2.9206 24.5893 5.58607 6.7074 10.9112 0H36.9973C28.585 4.9903 23.9204 12.677 22.6397 15.8965C24.7428 14.7697 28.9085 14.7563 30.7285 14.8904C43.5087 16.8221 47.243 25.7564 47.5126 29.9821C50.2628 43.3432 40.7046 50.4396 35.5817 52.3177C17.1394 57.9519 7.94525 48.092 5.65347 42.4578Z"
              stroke="#E6E9F1"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <figure>
        <Image
          className="h-24 w-24 rounded-full object-cover mx-auto"
          src={avatar}
          alt="User Image"
          loading="lazy"
          width={100}
          height={100}
        />
      </figure>
      <div className=" text-center flex items-center justify-center gap-3 flex-col">
        <p className="text-secondary">{'"' + evaluation + '"'}</p>
        <h2 className="text-xl">{signature}</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
