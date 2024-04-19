import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { footbalimg } from "@/src/Assets/home";
export default function NewsLetter() {
  return (
    <section className="flex flex-col main-container items-center justify-center gap-10 my-12  ">
      <h2 className="text-4xl text-center capitalize tracking-wider font-bold ">
        newsletter
      </h2>
      <section className="w-full  flex flex-col lg:flex-row items-center justify-center gap-6 rounded-md bg-[#cbd7ea] group">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <span>
            <h2 className="text-4xl font-bold text-[#1C439A] uppercase">
              newsletter
            </h2>
            <h2 className="text-4xl font-bold text-[#1C439A] uppercase">
              subscription
            </h2>
          </span>
          <span className="flex">
            <input
              type="email"
              className="w-72 h-12 rounded-md focus:border-none border border-gray-600 pl-5"
              placeholder="Enter your email address"
            />
            <button className="px-3 py-2 bg-themeColor text-white rounded-xl">
              <ArrowOutwardIcon className="!text-white" />
            </button>
          </span>
        </div>
        <div className="w-full center  ">
          <img
            src={footbalimg.src}
            alt=""
            className="group-hover:scale-150 !transition-all !duration-700 !ease-in-out"
          />
        </div>
      </section>
    </section>
  );
}
