import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function JoinUsCareer() {
  return (
    <section className="h-screen w-screen bg-themeColor">
      <div className=" center flex flex-col">
        <p className="text-5xl text-white mt-16 font-bold">
          Join Our Team & Embrace the
        </p>
        <p className="text-5xl text-white font-bold">
          Advancement of Mobile Payment Technology
        </p>
        <p className="text-2xl text-white font-semibold mt-12 from-neutral-50">
          Aid us in revolutionizing the digital payments landscape.
        </p>
      </div>
      <div className="center flex mt-12">
        <button className="bg-white rounded-full px-4 py-3 text-[#392d95] transition-all duration-500 ease-in-out active:scale-90 overflow-hidden">
          {""}
          APPLY NOW <ArrowForwardRoundedIcon />
        </button>
      </div>
    </section>
  );
}
