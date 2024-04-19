import React from "react";
import { Imockupways2, gplay } from "@/src/Assets/home";

export default function QuickWaysSection() {
  return (
    <section className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-12">
      <div className="w-full item-center justify-start">
        <img src={Imockupways2.src} alt="" className="h-[35em] w-auto " />
        <img src={gplay.src} alt="" className="h-16 w-auto" />
      </div>

      <div className="flex flex-col items-start justify-end  w-full">
        <p className="text-xl lg:text-3xl font-semibold text-[#1C439A]">
          4 Quick Ways to Use
        </p>
        <p className="text-xl lg:text-3xl font-semibold text-[#1C439A] ml-3">
          our Services:
        </p>

        <span className="mt-8 gap-4 ml-3">
          <p className="text-xl lg:text-1xl font-bold text-Black">
            Download App
          </p>
          <span className="w-full mt-8">
            <p className="text-sm font-semibold text-[#00000]">
              First to use iPaisa you can download the
            </p>
            <p className="text-sm font-semibold text-[#00000]">
              App through PlayStore
            </p>
          </span>
        </span>

        <span className="mt-8 gap-4 ml-3">
          <p className="text-xl lg:text-1xl font-bold text-Black">
            Choose Payment
          </p>
          <span className="w-full mt-8">
            <p className="text-sm font-semibold text-[#00000]">
              You can choose all types of payments that are
            </p>
            <p className="text-sm font-semibold text-[#00000]">
              already integrated with iPaisa
            </p>
          </span>
        </span>

        <span className="mt-8 gap-4 ml-3">
          <p className="text-xl lg:text-1xl font-bold text-Black">
            Make Payment
          </p>
          <span className="w-full mt-8">
            <p className="text-sm font-semibold text-[#00000]">
              You can make all online transactions with
            </p>
            <p className="text-sm font-semibold text-[#00000]">
              the iPaisa application easily{" "}
            </p>
          </span>
        </span>

        <span className="mt-8 gap-4 ml-3">
          <p className="text-xl lg:text-1xl font-bold text-Black">
            Get Amazing Services
          </p>
          <span className="w-full mt-8">
            <p className="text-sm font-semibold text-[#00000]">
              Many applications provide 24 hour service{" "}
            </p>
            <p className="text-sm font-semibold text-[#00000]">
              to help all your transactions{" "}
            </p>
          </span>
        </span>
      </div>
    </section>
  );
}
