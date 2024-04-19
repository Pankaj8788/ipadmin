import React from "react";
import { aboutSection11, aboutSection22 } from "@/src/Assets/aboutus2";

export default function ContainSection() {
  return (
    <section className="w-full flex flex-col  items-center justify-between ">
      <div className="w-full flex items-start justify-between h-[30rem]">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0038C9]">
          <h2 className="text-xl lg:text-5xl font-semibold text-white">
            Our Mission
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua..
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <img
            src={aboutSection11.src}
            alt=""
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>

      <div className="w-full flex items-start flex-row-reverse justify-between h-[30rem]">
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start justify-start gap-6 h-full bg-[#0E0067]">
          <h2 className="text-xl lg:text-5xl font-semibold text-white">
            Our Vision
          </h2>
          <div>
            <p className="text-xl lg:text-1xl font-semibold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua..
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <img
            src={aboutSection22.src}
            alt=""
            className="w-full h-full object-cover bg-black"
          />
        </div>
      </div>
    </section>
  );
}
