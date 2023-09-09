import React from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";
import SectionHeader from "../Common/SectionHeader";

const teamData: TeamCardProps[] = [
  {
      signature: "Tanzidul Karim Akash",
      avatar: "https://i.ibb.co/S6GqvpV/tanzidul-karim-akash.png",
      position: "Business Development Manager",
      opinion: "Our startup's culture fosters creativity and collaboration, making it a truly empowering and supportive environment to work in. It's a place where ideas flourish and dreams become reality.",
      social: [
          {
              network: "LinkedIn",
              profile: ""
          },
          {
              network: "Twitter",
              profile: ""
          },
          {
              network: "Facebook",
              profile: ""
          }
      ]
  },
  {
      signature: "Omar Faruk",
      avatar: "https://i.ibb.co/b2Gk7pG/omar-faruk.png",
      position: "Sr. UI/UX Designer & Executive Officer",
      opinion: "I'm continuously inspired by the level of passion and dedication that our team brings to the table every day. Working with such talented individuals is a privilege.",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/glisterflow"
          },
          {
              network: "Behance",
              profile: "https://www.behance.net/Glisterflow"
          },
          {
              network: "Facebook",
              profile: "https://www.facebook.com/Glisterflow"
          }
      ]
  },
  {
      signature: "Maruf Ahmed",
      avatar: "https://i.ibb.co/ZdGg5RF/maruf-ahmed.png",
      position: "UI/UX Designer",
      opinion: "I appreciate the emphasis our startup places on employee development and well-being. The support and resources provided for personal and professional growth truly make this a special place to work.",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/uxthrill"
          },
          {
              network: "Behance",
              profile: "https://www.behance.net/UXThrill"
          },
          {
              network: "Facebook",
              profile: "https://www.facebook.com/marufahmed.pollob"
          }
      ]
  },
  {
      signature: "Mamunur Rashid Johni",
      avatar: "https://i.ibb.co/t8j9NB8/mamunur-rashid-joni.png",
      position: "Native Android Developer",
      opinion: "Innovation knows no boundaries. The journey of a startup is the canvas of your dreams.Don't be afraid to take the leap. The greatest empires were once just a startup idea.",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/mamunur-rashid-johny"
          },
          {
              network: "GitHub",
              profile: "https://github.com/mamunur-rashid-johny"
          },
          {
              network: "Facebook",
              profile: "https://www.facebook.com/jony.edru"
          }
      ]
  },
  {
      signature: "Sufia Akter",
      avatar: "https://i.ibb.co/D4HD9d4/sufia-akter.png",
      position: "Laravel Developer",
      opinion: "It's amazing to witness the growth and progress our startup has made in such a short time. Each day, we're making a meaningful impact in the industry, and I'm thrilled to be a part of this journey.",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/sufia-akter-1b4689177"
          },
          {
              network: "GitHub",
              profile: "https://github.com/Sufia-TheSecureDev"
          },
          {
              network: "Facebook",
              profile: "https://www.facebook.com/SufiaTheSecureDev"
          }
      ]
  },
  {
      signature: "Simanta Barua",
      avatar: "https://i.ibb.co/kh2bhrm/simanta-barua.png",
      position: "FrontEnd Developer",
      opinion: "Our startup's commitment to staying ahead of the curve in terms of technology and market trends show our determination to lead the industry into the future",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/simantabarua"
          },
          {
              network: "GitHub",
              profile: ""
          },
          {
              network: "Facebook",
              profile: ""
          }
      ]
  },
  {
      signature: "Abdullah Al Mamun Roni",
      avatar: "https://i.ibb.co/BNTd6Nq/abdullah-al-mamun-roni.png",
      position: "Co-Founder | Entrepreneur | Developer",
      opinion: "I'm proud to represent a startup that not only prioritizes innovation and efficiency but also actively seeks to make a positive difference in the world. Our company's dedication to sustainability and social responsibility is truly commendable.",
      social: [
          {
              network: "LinkedIn",
              profile: "https://www.linkedin.com/in/md-aamroni"
          },
          {
              network: "GitHub",
              profile: "https://github.com/md-aamroni"
          },
          {
              network: "Facebook",
              profile: "https://www.facebook.com/md.aamroni"
          }
      ]
  }
]

const Team: React.FC = () => {
  return (
    <>
      <section id="our-team" className="min-h-screen container mx-auto py-20">
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
      </section>
    </>
  );
};

export default Team;
