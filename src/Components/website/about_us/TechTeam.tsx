import React from "react";
import TechTeamCard from "../card/about/TechTeamCard";
import { techTeamArr } from "@/src/utils/website/about";

export default function TechTeam() {
  return (
    <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12">
      <h2 className="text-[#0E0067] text-6xl font-bold mt-4">Tech Team</h2>
      <section className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        {techTeamArr.map((item) => (
          <TechTeamCard item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}
