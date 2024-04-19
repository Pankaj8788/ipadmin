import { careerimg3 } from "@/src/Assets/career";
import React from "react";

export default function WhyCareer() {
  return (
    <section className="main-container flex w-full justify-start items-start ">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10  ">
        <img
          src={careerimg3.src}
          alt=""
          className="group-hover:scale-110 !transition-all !duration-700 !ease-in-out mb-4  "
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 ">
        <p className="text-4xl mb-4 center text-[#392d95]">Why Join Us?</p>
        <p className=" text-lg gap-2">
          {" "}
          <b>Innovative Environment:</b> Be part of a dynamic team that thrives
          on innovation and creativity. At iPaisa, we encourage out-of-the-box
          thinking and value fresh perspectives.
        </p>

        <p className=" text-lg gap-2">
          <b>Impactful Work:</b> Contribute to projects that have a real-world
          impact and help shape the future of finance. Your ideas and efforts
          will directly influence the solutions we provide to our customers.
        </p>

        <p className=" text-lg gap-2">
          <b>Continuous Learning:</b> We foster a culture of continuous learning
          and growth. Whether it's through mentorship programs, training
          sessions, or professional development opportunities, we're committed
          to helping you expand your skills and reach your full potential.
        </p>

        <p className=" text-lg gap-2">
          <b>Collaborative Culture:</b> Join a supportive and collaborative work
          environment where teamwork is celebrated, and everyone's voice is
          heard. We believe that diverse perspectives lead to better outcomes,
          and we encourage collaboration across teams and departments.
        </p>

        <p className=" text-lg gap-2">
          <b>Work-Life Balance:</b> We understand the importance of maintaining
          a healthy work-life balance. Enjoy flexible work arrangements and
          wellness initiatives designed to help you thrive both personally and
          professionally.
        </p>
      </div>
    </section>
  );
}
