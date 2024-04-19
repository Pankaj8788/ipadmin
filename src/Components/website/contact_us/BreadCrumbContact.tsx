import React from "react";
import { TextField } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

export default function BreadCrumbContact() {
  return (
    <section className="main-container flex w-full justify-start items-start ">
      <div className="w-full flex flex-col items-start justify-start gap-6 mt-12">
        <p className="w-full text-5xl text-[#131A4A] center mb-4 justify-start">
          Get in Touch
        </p>

        <p className="text-xl text-gray-500 lg:text-1xl lg:leading-10 font-semibold logoWarper_one">
          <LocationOnSharpIcon className="mr-2" />
          <b className="font-bold">Address</b>: 2nd Floor, Golden Empire, near
          Croma - <p>Baner, Rajyog Cooperative Housing Society,</p>
          <p>Veerbhadra Nagar, Baner, Pune, Maharashtra 411045</p>
        </p>
        <p className="mt-8 text-xl text-gray-500 lg:text-1xl lg:leading-10 font-semibold logoWarper_one">
          <CallIcon className="mr-2" />
          <b>Phone :</b> 084849 34745
        </p>
        <p className=" text-xl lg:text-1xl text-gray-500 lg:leading-10 font-semibold logoWarper_one">
          <EmailIcon className="mr-2" />
          <b>Email :</b> ipaisa@gmail.com
        </p>
      </div>
      <form className="w-full mt-8 justify-end gap-4 ">
        <div className="flex">
          <div className="w-full flex flex-col justify-end gap-4">
            <p className="font-bold text-md capitalize">Your Name</p>
            <TextField
              type="text"
              placeholder=""
              className="w-80 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-end gap-4 mt-2">
            <p className="font-bold text-md capitalize">Last Name</p>
            <TextField
              type="text"
              placeholder=""
              className="w-80 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-end gap-4 mt-2">
          <p className="font-bold text-md capitalize">Phone</p>
          <TextField
            type="text"
            placeholder=""
            className="w-2/4 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-end gap-4 mt-2">
          <p className="font-bold text-md capitalize">Email</p>
          <TextField
            type="text"
            placeholder=""
            className="w-2/4 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-end gap-4 mt-2">
          <p className="w-full font-bold text-md">Message:</p>
          <TextField
            multiline
            rows={3}
            type="text"
            placeholder=""
            className=" bg-white mt-4 w-2/4"
          />
        </div>
        <div className="mt-6 gap-4">
          <button
            type="submit"
            className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
