import React from "react";
import { MainLogo } from "../Assets/navbar";
import { bharatbill } from "../Assets/navbar";

import Link from "next/link";
import { useRouter } from "next/router";

export default function MainHeader() {
  const router = useRouter();
  return (
    <section className="w-full hidden lg:flex items-center justify-between gap-6 main-container h-[6rem] bg-gradient-to-br from-blue-950 to-[#364ADB]">
      <div className="w-[30%] flex">
        <Link href={"/"}>
          <img src={MainLogo.src} alt="" className="w-22 h-20 " />
        </Link>
        <Link href={"/"}>
          <img
            src={bharatbill.src}
            alt=""
            className="w-17 h-20 bg-white ml-4"
          />
        </Link>
      </div>
      <div className="w-full flex items-center justify-between gap-6">
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/");
          }}
        >
          <p className="text-lg font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer text-white">
            home
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/aboutus2");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            About us
          </p>
        </span>

        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer ">
            services
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/blog");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            blogs
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/contact_us");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            contact us
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/career");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            career
          </p>
        </span>
      </div>

      <div className="w-1/2 h-full flex items-center justify-end  ">
        <button className="px-8 py-3 rounded-3xl discount-card overflow-hidden text-white font-bold capitalize bg-[#131A4A]  Capitalize !transition-all !duration-500 !ease-in-out hover:scale-105 active:scale-95">
          Download The App
        </button>
      </div>
    </section>
  );
}
