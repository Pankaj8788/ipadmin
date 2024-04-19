import { aboutBreadcrumb } from "@/src/Assets/about";
import React from "react";

export default function Breadcrumb() {
  return (
    <section
      className="w-full h-[70vh]  bg-cover bg-no-repeat bg-center sticky top-0 -z-50"
      style={{ backgroundImage: `url(${aboutBreadcrumb.src})` }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-themeColor bg-opacity-40 ">
        <div className="w-full h-full flex flex-col gap-6 items-start justify-center main-container">
          <h1 className="text-6xl font-bold text-white capitalize">about us</h1>
          <p className="text-xl font-bold text-themeColor uppercase logoWarper_two">
            our core values
          </p>
        </div>
      </div>
    </section>
  );
}
