import React from "react";
import BlogCard from "../card/blog/BlogCard";
import { blogsArrCard } from "@/src/utils/website/blog";

export default function Blog() {
  return (
    <section className="w-full  main-container">
      {/* // <section className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12"> */}
      {blogsArrCard.map((item) => (
        <BlogCard item={item} key={item.id} />
      ))}
    </section>
  );
}
