import { blogArrType } from "@/src/types";
import React from "react";
type prop = {
  item: blogArrType;
};
export default function BlogCard({ item }: prop) {
  return (
    <section className="w-full flex flex-col items-start justify-start gap-6">
      <img
        src={item.img.src}
        alt=""
        className="w-full h-52 rounded-lg object-cover"
      />
      <p className="font-semibold tracking-wide ">{item.title}</p>
      <p className="text-sm text-gray-700">{item.date}</p>
    </section>
  );
}
