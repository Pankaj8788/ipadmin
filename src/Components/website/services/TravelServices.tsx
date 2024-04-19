import React from "react";
import { travelServices } from "@/src/Assets/services";

export default function TravelServices() {
  return (
    <section className="w-full main-container ">
      <div
        className="w-full h-[100vh]   bg-cover bg-no-repeat bg-center sticky top-10 -z-50 "
        style={{ backgroundImage: `url(${travelServices.src})` }}
      ></div>
    </section>
  );
}
