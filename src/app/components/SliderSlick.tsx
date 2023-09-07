"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReiviewCard";


interface Review {
  signature: string;
  avatar: string;
  evaluation: string;
} 

const reviews: Review[] = [
  {
    signature: "Mohammad Rahman, CEO, Galaxy HomeCare LLC",
    avatar: "https://i.ibb.co/pxFyZ4Y/instructor5.jpg",
    evaluation:
      "QubeNext transformed our business with their cutting-edge software development. Their ability to translate our vision into reality was remarkable. What sets them apart is their proactive communication and ability to adapt to changing project needs. QubeNext is a true partner in success.",
  },
  {
    signature: "Logan Jackson, Entrepreneur, Private Business",
    avatar: "https://i.ibb.co/64FtpRx/instructor6.jpg",
    evaluation:
      "I've had the pleasure of working with QubeNext on multiple projects, and each time they have consistently delivered outstanding results. Their attention to detail, technical expertise, and dedication to client satisfaction make them the go-to choice for any IT project. QubeNext sets the bar high for excellence",
  },
  {
    signature: "Nayon Hasan, CEO, ECom Solution BD",
    avatar: "https://i.ibb.co/64FtpRx/instructor6.jpg",
    evaluation:
      "I can't express how thrilled I am with the exceptional service provided by QubeNext. From day one, they displayed a level of professionalism and dedication that is truly commendable. Their team's expertise and commitment to excellence have exceeded my expectations.",
  },
  {
    signature: "Tanvir Mahmud, Founder, Guideasy Limited",
    avatar: "https://i.ibb.co/64FtpRx/instructor6.jpg",
    evaluation:
      "QubeNext is a dream team for any company seeking IT excellence. Their dedication, expertise, and commitment to client satisfaction are second to none. They not only transformed our systems but also transformed our business. QubeNext is not just a service provider; they are the driving force behind our success story.",
  },
];
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center gap-10",
      centerMode: true,
      infinite: true,
      slidesToShow: 2,
      speed: 500,
      dots: true,
    };
    return (
      <div className="mx-auto container space-x-4">
        <Slider {...settings} >
        {reviews.map((review, index) => (
                <ReviewCard  key={index} review={review} />
            ))}
        </Slider>
      </div>
    );
  }
}