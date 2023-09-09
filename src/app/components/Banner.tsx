"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { AnimatedSVG } from "./AnimatedSVG";

const Banner: React.FC = () => {
  const slides = [
    {
      title: "Crafting Intuitive Interfaces that Engage and Delight Users",
      genre: "UI/UX Design",
      detail:
        "Create an immersive and user-centric digital experience with our UI/UX design services. Our expert designers blend aesthetics with functionality to craft intuitive interfaces that engage and delight users. From wireframing and prototyping to user testing and interface design, we ensure your digital product delivers an exceptional user experience.",
    },
    {
      title: "Guiding Your Product Journey From Idea to Market Success",
      genre: "Product Development",
      detail:
        "Turn your groundbreaking ideas into market-ready products with our end-to-end product development services. From conceptualization and market research to prototyping and product launch, our team of experts guides you through every stage of the product development lifecycle. We focus on market fit, user feedback, and iterative development to ensure your product stands out from the competition.",
    },
    {
      title: "Bringing Your Ideas to Life With Seamless and Captivating Apps",
      genre: "App Development",
      detail:
        "Deliver seamless experiences to your audience with our customized app development solutions. Whether you need a native iOS or Android app, a cross-platform application, or a progressive web app, our experienced developers have you covered. We leverage the latest technologies and industry best practices to create scalable, secure, and feature-rich applications that meet your specific business requirements.",
    },
    {
      title: "Building Tailored Software Solutions that Empower Your Business",
      genre: "Software Development",
      detail:
        "Unlock the full potential of your business with our custom software development solutions. Our skilled developers leverage cutting-edge technologies and industry best practices to build scalable, secure, and high-performing software applications. Whether you need a web or mobile app, a customized enterprise solution, or a software product, we deliver tailor-made solutions that drive business growth.",
    },
    {
      title: "Creating compelling visuals that tell your brand's story",
      genre: "Graphics Design",
      detail:
        "Make a memorable visual impact with our creative graphics design services. Our talented designers combine artistic flair with strategic thinking to create compelling visuals that capture your brand essence. Whether it's designing a captivating logo, crafting eye-catching marketing materials, or developing a cohesive brand identity, we elevate your brand's presence and leave a lasting impression.",
    },
    {
      title: "Transforming Your Online Presence With Stunning Web Design",
      genre: "Web Design",
      detail:
        "Create a powerful online presence with our professional web design services. Our talented team of designers combines creativity and technical expertise to develop visually stunning and user-friendly websites. We prioritize responsive design, intuitive navigation, and engaging visuals to ensure your website leaves a lasting impression on visitors and drives conversions.",
    },
  ];

  const params = {
    pagination: {
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },
    speed: 300,
    modules: [Autoplay],
    EffectFade,
  };

  return (
    <>
      <AnimatedSVG />
      <Swiper {...params}>
      {slides.map(({ title, genre, detail }, index) => (
        <SwiperSlide key={index}>
          <section
            id="home"
            className="relative min-h-screen flex justify-center flex-col items-center gap-3 md:gap-6 text-center px-4 "
          >
            <p className="text-sm tracking-widest uppercase font-bold text-primary ">
              {genre}
            </p>
            <h2 className="text-3xl md:text-5xl z-30 max-w-4xl text-balance font-bold">
              {title}
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-gray-500">{detail}</p>
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
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Banner;

