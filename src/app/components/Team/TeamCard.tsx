import Image from "next/image";
import React from "react";
import "font-awesome/css/font-awesome.min.css";

interface SocialLink {
  network: string;
  profile: string;
}

export interface TeamCardProps {
  signature: string;
  avatar: string;
  position: string;
  opinion: string;
  social: SocialLink[];
}

const socialIcon: Record<string, string> = {
  LinkedIn: "fa fa-linkedin",
  GitHub: "fa fa-github",
  Facebook: "fa fa-facebook",
  Twitter: "fa fa-twitter",
  Behance: "fa fa-behance",
};

const TeamCard: React.FC<TeamCardProps> = ({
  signature,
  avatar,
  position,
  opinion,
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
            src="https://chart.googleapis.com/chart?chs=50x50&cht=qr&chl=QubeNext&chld=L|1&choe=UTF-8"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg border-white border-8 object-cover"
          />
        </div>
        <div className="team-card-body">
          <div className="my-4">
            <h2 className="text-2xl">{signature}</h2>
            <p className="text-gray-600">{position}</p>
          </div>
          <p className="my-4">{opinion}</p>
        </div>
      </div>

      <div className="flex items-center justify-around md:justify-center text-4xl md:gap-8">
        {social.map((value, index) => (
          <a
            key={index}
            className="text-gray-600 hover:-translate-y-2 transition duration-300 transform"
            href={value.profile}
          >
            <i className={`${socialIcon[value.network]} `}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
