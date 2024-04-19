import React from "react";
import HeroCard from "../card/home/HeroCard";
import { heroArr } from "@/src/utils/website/home";

export default function HeroSection() {
  return (
    <section className="w-full main-container mt-12 mb-64 center ">
      <div className="w-full h-60 rounded-xl bg-black flex flex-col items-center justify-between gap-20 bg-gradient-to-br from-black to-blue-950">
        <p className="text-white w-full text-center font-bold text-2xl lg:text-4xl capitalize">
          we made banking <span className="text-[#047bfe]">{`easier!`}</span>
        </p>
        <div className="w-full flex items-center justify-between px-48">
          {heroArr.map((item) => (
            <HeroCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
