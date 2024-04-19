import { careerimg1, careerimg2 } from "@/src/Assets/career";
import React from "react";

export default function BreadCrumbCareer() {
  return (
    <section className="flex flex-col  items-center justify-center gap-10 my-12  ">
      {/* <h2 className="text-5xl text-center capitalize tracking-wider font-bold text-[#1C439A] ">
        Welcome to iPaisa - Where Finance Meets Innovation
      </h2> */}
      <section className="w-full  flex flex-col lg:flex-row items-center justify-center gap-6 rounded-md  group">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <span className="mb-8">
            <h2 className="text-2xl font-bold text-[#392d95] uppercase center">
              Welcome to iPaisa -
            </h2>
            <p className="text-2xl font-bold text-[#392d95] uppercase center">
              Where Finance Meets Innovation
            </p>
          </span>
          <span>
            <p className="text-1xl font-bold text-[#333535] uppercase mt-3 ml-8 ">
              At iPaisa, we're dedicated to revolutionizing the way people
              manage their finances. Our commitment to innovation, coupled with
              a passion for empowering individuals to achieve financial freedom,
              drives everything we do. Join us on our journey to redefine the
              future of finance with IPaisa.
            </p>
          </span>
        </div>
        <div className="w-full center  ">
          <img
            src={careerimg2.src}
            alt=""
            className="group-hover:scale-110 !transition-all !duration-700 !ease-in-out mb-4"
          />
        </div>
      </section>
    </section>
  );
}
