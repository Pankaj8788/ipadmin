import { Quartzlogo } from "@/src/Assets/home";
import { clientArr } from "@/src/utils/website/home";
import { Group } from "@mui/icons-material";
import React from "react";

export default function OurClients() {
  return (
    <section className="bg-gradient-to-r from-[#047bfe] to-[#0059bb]">
      <section className="main-container w-full center my-12 ">
        <div className="w-full h-28  ">
          <div className="w-full h-full center_between gap-2  px-5">
            {clientArr.map((item) => (
              <img
                src={item.img.src}
                alt=""
                className="h-10 w-auto object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
