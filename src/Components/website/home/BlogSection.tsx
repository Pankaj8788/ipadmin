import { blogArr } from "@/src/utils/website/home";
import React from "react";
import Slider from "react-slick";
import BlogCard from "../card/home/BlogCard";
const settings = {
  dots: true,

  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 5000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function BlogSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 main-container my-12">
      <h2 className="text-4xl font-bold capitalize tracking-wide">
        latest blogs
      </h2>
      <div className="w-full relative overflow-hidden">
        <div className="w-96 h-60 bg-gradient-to-r from-white to-transparent absolute z-50 top-0 left-0"></div>
        <div className="w-96 h-60 bg-gradient-to-r from-transparent to-white absolute z-50 top-0 right-0"></div>
        <Slider {...settings}>
          {blogArr.map((item) => (
            <div key={item.id} className="mx-4 px-4">
              <BlogCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
