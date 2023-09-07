import Image from "next/image";
import React from "react";
import "font-awesome/css/font-awesome.min.css";

interface SocialLink {
  title: string;
  icon: string;
  profile: string;
}

export interface TeamCardProps {
  userName: string;
  avatar: string;
  designation: string;
  excerpt: string;
  qrCode: string;
  social: SocialLink[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  userName,
  avatar,
  designation,
  excerpt,
  qrCode,
  social,
}) => {
  return (
    <div className="team-card w-96 h-[465px] p-6 hover:scale-100 transition duration-300 transform hover:shadow-2xl cursor-pointer flex flex-col justify-between">
    <div>
      <div className="flex justify-between">
        <Image
          src={avatar}
          alt=""
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover"
        />
        <Image
          src={qrCode}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-lg border-white border-8 object-cover"
        />
      </div>
      <div className="team-card-body">
        <div className="my-4">
          <h2 className="text-2xl">{userName}</h2>
          <p className="text-gray-600">{designation}</p>
        </div>
        <p className="my-4">{excerpt}</p>
      </div>
    </div>
  
    <div className="team-card-footer">
      <div className="flex items-center justify-center text-4xl md:gap-8">
        {social.map((value, index) => (
          <a
            key={index}
            className="text-gray-600 hover:-translate-y-2 transition duration-300 transform"
            href={value.profile}
          >
            <i className={`${value.icon} block w-4 h-4`} ></i>
          </a>
        ))}
      </div>
    </div>
  </div>
  
  
  );
};

export default TeamCard;
