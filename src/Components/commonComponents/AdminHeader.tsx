import React from "react";

export default function AdminHeader({ data }: any) {
  return (
    <section className="bg-white">
      <section className="w-full h-20 main-container flex item justify-between  bg-[#6633cc]">
        <div className="w-full ">
          <h2 className="text-2xl font-semibold capitalize text-white">
            {data.heading}
          </h2>
          <h2 className="capitalize text-left text-white ">
            {data.title} /{" "}
            <span className="font-bold text-white">{data.subTitle}</span>
          </h2>
        </div>
        <div className="w-fit flex items-center justify-end">
          <h2 className="capitalize text-left text-white ">{data.message}</h2>
        </div>
      </section>
    </section>
  );
}
