import { mobscreen } from "@/src/Assets/home";
import { Router } from "next/router";
import React from "react";
import { useRouter } from "next/router";

export default function Breadcrumb() {
  const router = useRouter();

  return (
    <>
      <section className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-12 group bg-gradient-to-br from-blue-950 to-[#364ADB]">
        <div className="w-full flex flex-col items-start justify-start gap-6 pt-28 h-full border-t-[1.5em] border-r-[1.5em] border-blue-900 main-container rounded-tr-[30rem] ">
          <p className="text-xl lg:text-6xl font-semibold text-white">
            Guiding you{" "}
          </p>
          <p className="text-xl lg:text-6xl font-semibold text-white">
            through life's{" "}
          </p>
          <p className="text-xl lg:text-6xl font-semibold text-white">
            financial journey
          </p>
          <p className="text-xl lg:text-md  tracking-wide text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            excepturi, consequuntur exercitationem magni aliquid quia dolores
            iure adipisci.
          </p>

          <button
            className="px-8 py-3 rounded-3xl text-[#131A4A] font-bold capitalize bg-white  transition-all duration-500 ease-in-out active:scale-90 overflow-hidden "
            onClick={() => {
              router.push("/admin");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center main-container justify-end ">
          <img
            src={mobscreen.src}
            alt=""
            className="h-[45em] w-auto  group-hover:opacity-100 opacity-0 "
          />
        </div>
      </section>
    </>
  );
}
