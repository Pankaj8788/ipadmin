import React from "react";
import OurteamCard from "../card/about/OurteamCard";
import { ourTemArr } from "@/src/utils/website/about";

export default function OurTeam() {
  return (
    <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12">
      <h2 className="text-[#0E0067] text-6xl font-bold mt-4">Our Team</h2>

      <section className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        {ourTemArr.map((item) => (
          <OurteamCard item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
}
