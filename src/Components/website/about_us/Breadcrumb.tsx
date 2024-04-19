import React from "react";
import { breadCrumb1, breadCrumb2 } from "@/src/Assets/about";

export default function Breadcrumb() {
  return (
    <section
      className="w-full main-container flex flex-col-reverse md:flex-row items-center justify-between gap-6 my-12 "
      style={{ backgroundImage: `url(${breadCrumb2.src})` }}
    >
      <div className="w-full flex flex-col items-start justify-start gap-6 ">
        <p className="text-xl lg:text-5xl font-bold text-[#0E0067] logoWarper_one">
          About Us
        </p>
        <p className="text-xl lg:text-1xl  font-semibold logoWarper_one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab
          dicta necessitatibus alias nemo rerum amet esse eaque blanditiis sed
          minus, quia similique officiis illum quas non ducimus quibusdam?
          Necessitatibus non laudantium, fugiat odio totam quibusdam adipisci.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <img src={breadCrumb1.src} alt="" className="h-[35em] w-auto" />
      </div>
    </section>
  );
}
