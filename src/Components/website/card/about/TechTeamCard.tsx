import { techTeamArrType } from "@/src/types";
import React from "react";
type prop = {
  item: techTeamArrType;
};
export default function TechTeamCard({ item }: prop) {
  return (
    <section className="w-full flex flex-col items-center justify-between   ">
      <div className="w-40 h-40 rounded-full  overflow-hidden">
        <img src={item.img.src} alt="" className="w-full f-full object-cover" />
      </div>
      <p className="font-bold mr-4 mt-2">{item.title}</p>
    </section>
  );
}
