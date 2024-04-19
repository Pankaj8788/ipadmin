import React from "react";
import { aboutImg1 } from "../../../Assets/about";
export default function HeroSection() {
  return (
    <section className="w-full bg-white py-12">
      <section className="w-full main-container flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="w-full h-44">
          <p className="text-base font-medium text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, facilis molestias iusto ab autem fugit, id error sed
            optio, laudantium molestiae? In libero placeat ullam at incidunt
            eius aspernatur adipisci id a corporis repellat nam sed, molestiae,
            quos excepturi autem?
          </p>
        </div>
        <div className="w-full h-44">
          <p className="text-base font-medium text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, facilis molestias iusto ab autem fugit, id error sed
            optio, laudantium molestiae? In libero placeat ullam at incidunt
            eius aspernatur adipisci id a corporis repellat nam sed, molestiae,
            quos excepturi autem?
          </p>
        </div>
        <div className="w-full h-44">
          <img
            src={aboutImg1.src}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </section>
  );
}
