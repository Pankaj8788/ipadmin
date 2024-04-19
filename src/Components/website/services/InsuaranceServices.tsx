import React from "react";
import { serviceInsuarance } from "@/src/Assets/services";

export default function InsuaranceServices() {
  return (
    <section className="w-full main-container flex  bg-[#E0E8FF]">
      <div className="w-full flex items-center justify-start">
        <img
          src={serviceInsuarance.src}
          alt=""
          className="h-[35em] w-auto mb-4  !duration-500 !ease-in-out hover:scale-105 active:scale-95"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-6 mt-12 ml-4">
        <p className="text-lg lg:text-2xl font-bold text-black logoWarper_one">
          Insuarance for all your needs
        </p>

        <p className="text-xl lg:text-1xl gap-2 lg:leading-10 font-semibold logoWarper_one">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          accusantium optio unde voluptatem. Provident sed ea cum libero nihil
          tenetur aperiam unde accusantium sit, iusto numquam officia dicta modi
          culpa iste doloribus quisquam laudantium itaque est reprehenderit
          eligendi amet molestias!
        </p>
      </div>
    </section>
  );
}
