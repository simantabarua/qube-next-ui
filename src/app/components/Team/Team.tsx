import React from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";
import SectionHeader from "../Common/SectionHeader";

const teamData: TeamCardProps[] = [
  {
    userName: "Tanzidul Karim Akash",
    avatar: "https://i.ibb.co/S6GqvpV/tanzidul-karim-akash.png",
    designation: "Co-Founder | Business Developer",
    excerpt:
      "Our startup's culture fosters creativity and collaboration, making it a truly empowering and supportive environment to work in. It's a place where ideas flourish and dreams become reality.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Omar Faruk",
    avatar: "https://i.ibb.co/b2Gk7pG/omar-faruk.png",
    designation: "Sr. UI/UX Designer & Executive Officer",
    excerpt:
      "I'm continuously inspired by the level of passion and dedication that our team brings to the table every day. Working with such talented individuals is a privilege.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Maruf Ahmed",
    avatar: "https://i.ibb.co/ZdGg5RF/maruf-ahmed.png",
    designation: "UI/UX Designer",
    excerpt:
      "I appreciate the emphasis our startup places on employee development and well-being. The support and resources provided for personal and professional growth truly make this a special place to work.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Mamunur Rashid Johni",
    avatar: "https://i.ibb.co/t8j9NB8/mamunur-rashid-joni.png",
    designation: "Native Android Developer",
    excerpt:
      "Innovation knows no boundaries. The journey of a startup is the canvas of your dreams.Don't be afraid to take the leap. The greatest empires were once just a startup idea.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Sufia Akter",
    avatar: "https://i.ibb.co/D4HD9d4/sufia-akter.png",
    designation: "Laravel Developer",
    excerpt:
      "It's amazing to witness the growth and progress our startup has made in such a short time. Each day, we're making a meaningful impact in the industry, and I'm thrilled to be a part of this journey.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Simanta Barua",
    avatar: "https://i.ibb.co/kh2bhrm/simanta-barua.png",
    designation: "FrontEnd Developer",
    excerpt:
      "Our startup's commitment to staying ahead of the curve in terms of technology and market trends show our determination to lead the industry into the future",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
  {
    userName: "Abdullah Al Mamun Roni",
    avatar: "https://i.ibb.co/BNTd6Nq/abdullah-al-mamun-roni.png",
    designation: "Co-Founder | Entrepreneur | Developer",
    excerpt:
      "I'm proud to represent a startup that not only prioritizes innovation and efficiency but also actively seeks to make a positive difference in the world. Our company's dedication to sustainability and social responsibility is truly commendable.",
    qrCode: "https://i.ibb.co/tQcpMBx/image-188-2.png",
    social: [
      {
        title: "Facebook",
        icon: "fa fa-facebook",
        profile: "https://facebook.com",
      },
      {
        title: "Twitter",
        icon: "fa fa-twitter",
        profile: "https://twitter.com",
      },
      {
        title: "Instagram",
        icon: "fa fa-instagram",
        profile: "https://instagram.com",
      },
      {
        title: "GitHub",
        icon: "fa fa-github",
        profile: "https://github.com",
      },
    ],
  },
];

const Team: React.FC = () => {
  return (
    <>
      <div className="min-h-screen container mx-auto py-20">
        <SectionHeader
          title="Powerhouse"
          subtitle="Meet Our Team"
          description="Hundreds of the most modern payment services available, connect them according to your needs - The API and data infrastructure we provide will easily help you."
        />
        <div className="max-w-7xl flex flex-wrap items-center justify-center px-4 mx-auto py-10 gap-6">
          {teamData.map((data, index) => (
            <TeamCard key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
