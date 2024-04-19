import { homeimg1 } from "@/src/Assets/home";
import { homeArrType } from "@/src/types";
import React from "react";
type prop = {
  item: homeArrType;
};
export default function HomeCard({ item }: prop) {
  return (
    <section className="w-full  flex flex-col items-center justify-center gap-8 ">
      <div className="w-full h-[39rem] overflow-hidden rounded-md">
        <img src={item.img.src} alt="" className="w-full h-full object-fill " />
      </div>
      <div className="w-full gap-6 flex flex-col justify-between items-center">
        <p className="font-bold text-4xl">{item.title}</p>
        <p className="w-3/4 text-center">{item.subTitle}</p>
        <p className="text-center w-3/4">{item.subTitle2}</p>
      </div>
    </section>
  );
}
