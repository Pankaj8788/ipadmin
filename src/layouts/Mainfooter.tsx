import React from "react";
import { MainLogo, gplay } from "../Assets/navbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export default function Mainfooter() {
  return (
    <section className="w-full main-container bg-gradient-to-br from-blue-950 to-[#364ADB] ">
      <section className="w-full  flex flex-col items-start justify-start gap-6  p-5 !text-white">
        <div className="w-full flex items-center justify-between  ">
          <img src={MainLogo.src} alt="" className="w-20 h-20" />
          <img src={gplay.src} alt="" className="h-16 w-auto" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full flex flex-col items-start justify-start gap-4 ">
            <p className="text-lg font-bold text-white">iPaisa</p>
            <p className="text-white font-semibold">
              <b className="font-bold">Address</b>: 2nd Floor, Golden Empire,
              near Croma - Baner, Rajyog Cooperative Housing Society, Veerbhadra
              Nagar, Baner, Pune, Maharashtra 411045
            </p>
            <p className="mt-8">
              <b>Phone:</b> 084849 34745
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Company</p>
            <p className=" text-white capitalize cursor-pointer">home</p>
            <p className=" text-white capitalize cursor-pointer">about us</p>
            <p className=" text-white capitalize cursor-pointer">services</p>
            <p className=" text-white capitalize cursor-pointer">blog</p>
            <p className=" text-white capitalize cursor-pointer">contact us</p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Privacy</p>
            <p className=" text-white capitalize cursor-pointer">
              privacy & policy
            </p>
            <p className=" text-white capitalize cursor-pointer">
              terms & conditions
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-lg font-bold text-white">Socials</p>
            <span className="flex gap-2">
              <Link href={"https://www.google.com/"} target="_blank">
                <InstagramIcon className="cursor-pointer h-10 w-10 !text-red-500 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              <Link href={"https://www.google.com/"} target="_blank">
                <LinkedInIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              <Link href={"https://www.google.com/"} target="_blank">
                <XIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
              <Link
                href={"https://www.youtube.com/@edsomfintech"}
                target="_blank"
              >
                <YouTubeIcon className="cursor-pointer h-10 w-10 !text-5xl !transition-all !duration-400 !ease-in-out hover:scale-105 active:scale-95" />
              </Link>
            </span>
          </div>
        </div>
        <span className="w-full h-[1px] bg-white"></span>
        <div className="w-full h-12 center">
          <p className="text-white font-bold capitalize">
            All &#169; copyrights are reverse by Edsomfintech{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </section>
  );
}
