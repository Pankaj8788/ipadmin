import React from "react";
import { Contactus1 } from "@/src/Assets/contactus";

export default function HomeContact() {
  return (
    <section className="flex flex-col  items-center justify-center gap-10 my-12  ">
      <h2 className="text-5xl text-center capitalize tracking-wider font-bold text-[#1C439A] ">
        Get in Touch
      </h2>
      <section className="w-full  flex flex-col lg:flex-row items-center justify-center gap-6 rounded-md bg-[#5f95ec] group">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <span>
            <h2 className="text-4xl font-bold text-[#1C439A] uppercase">
              Contact Us
            </h2>
            <p className="text-2xl font-bold text-[#392d95] uppercase mt-3">
              We are here to help you!
            </p>
          </span>
        </div>
        <div className="w-full center  ">
          <img
            src={Contactus1.src}
            alt=""
            className="group-hover:scale-110 !transition-all !duration-700 !ease-in-out mb-4"
          />
        </div>
      </section>
    </section>
  );
}
