import services from "@/src/pages/services";
import React from "react";
import { servicesBill } from "@/src/Assets/services";

export default function BillServices() {
  return (
    <section className="w-full main-container flex bg-white ">
      <div className="w-full flex flex-col items-center justify-center gap-6 mt-12">
        <p className="text-lg lg:text-2xl font-bold text-black logoWarper_one">
          Utility Bill Payment
        </p>

        <p className="text-xl lg:text-1xl lg:leading-10 font-semibold logoWarper_one">
          Bharat Bill Payment System (BBPS) revolutionizes the way bills are
          paid in India, offering a unified platform for convenient, secure, and
          efficient bill payments. Launched by the National Payments Corporation
          of India (NPCI), BBPS enables consumers to pay various utility bills,
          such as electricity, water, gas, and telecommunications, through a
          single interface.
        </p>
      </div>
      <div className="w-full flex items-center justify-end mt-14 ml-8 ">
        <img
          src={servicesBill.src}
          alt=""
          className="h-[35em] w-auto mb-8  !duration-500 !ease-in-out hover:scale-105 active:scale-95"
        />
      </div>
    </section>
  );
}
