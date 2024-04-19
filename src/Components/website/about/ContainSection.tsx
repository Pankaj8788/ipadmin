import { containArr } from "@/src/utils/website/home";
import React from "react";

export default function ContainSection() {
  return (
    <section className="main-container w-full  bg-white gap-6 flex flex-col items-start justify-between py-12">
      <div className="w-full flex flex-col gap-4 h-20 ">
        <p className="font-semibold text-themeColor">WHAT WE DO</p>
        <p className="font-bold text-3xl text-blue-900 capitalize">
          Our mission and values
        </p>
      </div>

      <div className="w-full flex items-center justify-between gap-8">
        <span className="w-full justify-start text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          molestias cum eum dolorum repellat nulla consequuntur quam esse? Error
          cupiditate enim totam odio amet nihil repellat fugit vel suscipit at,
          exercitationem commodi, aliquam incidunt.
        </span>
        <span className="w-1/4">
          <p className="font-bold">Ramkumar Jaiswal</p>
          <p>Founder&CEO</p>
        </span>
      </div>

      <div className="w-full flex justify-between gap-4 items-center">
        {containArr.map((item) => (
          <span
            className="w-full flex items-center justify-start gap-4 border-r-2 border-r-black pr-8"
            key={item.id}
          >
            <img src={item.img.src} alt="" />
            <span>
              <p className="font-bold">{item.title1}</p>
              <p className="font-bold text-themeColor">{item.title2}</p>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
