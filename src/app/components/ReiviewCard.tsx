import Image from "next/image";
import React from "react";

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
    <div className=" w-full h-72 my-4 bg-base-300 shadow-xl rounded-xl px-2 md:p-4 text-center space-y-4">
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
