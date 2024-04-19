import { imockup1 } from "@/src/Assets/home";
import { heroArrType } from "@/src/types";
import React from "react";
type prop = {
  item: heroArrType;
};
export default function HeroCard({ item }: prop) {
  return (
    <div
      className={`w-60 h-96 rounded-md bg-[#f1f1f1] flex ${
        item.id % 2 == 0 ? "flex-col-reverse" : "flex-col"
      } items-center justify-between gap-6 bg-black shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]`}
    >
      <span className="my-4">
        <p className="text-xl text-white text-center">{item.title}</p>
        <p className="text-xl text-white text-center">{item.subTitle}</p>
      </span>
      <img src={item.img.src} alt="" />
    </div>
  );
}
