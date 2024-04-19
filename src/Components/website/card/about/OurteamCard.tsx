import { aboutTeamArrType } from "@/src/types";
import React from "react";
type prop = {
  item: aboutTeamArrType;
};
export default function OurteamCard({ item }: prop) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full">
      <section className="w-full flex items-center justify-between  h-40 ">
        <div className="w-full bg-slate-800 h-full  rounded-full z-50 -mr-10 ml-10 overflow-hidden">
          <img
            src={item.img.src}
            alt=""
            className="w-full f-full object-cover"
          />
        </div>
        <div className="w-full bg-[#D9D9D9] h-40 rounded-[1.5rem]">
          <p className="mt-2 ml-4 center">{item.description}</p>
        </div>
      </section>
      <p className="font-bold">{item.title}</p>
    </section>
  );
}
