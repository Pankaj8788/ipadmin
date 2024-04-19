import React from "react";
import { TextField } from "@mui/material";

export default function HomeCareer() {
  return (
    <section className="main-container flex w-full justify-start items-start">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10">
        <p className="w-full text-5xl text-[#131A4A] center mb-4 justify-start">
          Career in Ipaisa
        </p>

        <p className="text-xl text-gray-500 lg:text-sm lg:leading-10 font-semibold logoWarper_one">
          Career in iPAisa offers an exciting opportunity to join a dynamic team
          dedicated to revolutionizing financial and payment services. Our
          vision is to deliver seamless financial software and payment
          application services, prioritizing user convenience. We're committed
          to bridging market demands with innovative solutions and contributing
          to national digitalization. As an employee, you'll be part of a
          mission-driven organization that values growth, innovation, and
          societal progress. Join us if you're passionate, ambitious, and ready
          to make a meaningful impact. Explore various roles and grow with us as
          we shape the future of finance together.
        </p>
      </div>
      <form className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2">
        <p className="font-semibold text-2xl mb-4">Apply Now</p>
        <p className="text-gray-400 text-mg">
          If you are passionate and dare to dream and achieve Big, drop your
        </p>
        <p className="text-gray-400 text-mg">details to our HR</p>
        <div className="flex mt-4">
          <div className="w-full flex flex-col justify-end gap-4">
            <TextField
              type="text"
              placeholder="First Name*"
              className="w-30 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-end gap-4 mt-2 ml-4">
            <TextField
              type="text"
              placeholder="Middle Name*"
              className="w-30 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-end gap-4 mt-2 ml-4">
            <TextField
              type="text"
              placeholder="Last Name*"
              className="w-30 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-full flex flex-col justify-end gap-4 mt-2">
            {/* <p className="font-bold text-md capitalize">Phone</p> */}
            <TextField
              type="text"
              placeholder="Phone*"
              className="w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-end gap-4 mt-2">
            {/* <p className="font-bold text-md capitalize">Email</p> */}
            <TextField
              type="text"
              placeholder="Email*"
              className="w-2/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start  mt-4">
          <p className="w-full font-bold text-md"></p>
          <TextField
            type="text"
            placeholder="Linked In Profile URL*"
            className=" bg-white mt-4 w-4/4"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </div>
        <div className="flex mt-4 ">
          <div className="w-full flex flex-col justify-start gap-4 mt-2">
            <p className="text-gray-500 text-md capitalize flex">
              Drop Resume*{" "}
              <p className="text-[#FF0000] text-sm">(pdf,doc & docx)</p>
            </p>
            <TextField
              type="file"
              placeholder=""
              className="w-3/4 bg-white"
              style={{
                height: "5px",
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-end gap-4 mt-2">
            <p className="text-gray-500 text-md capitalize flex">
              Drop Latest Photo*{" "}
              <p className="text-[#FF0000] text-sm">(pdf,doc & docx)</p>
            </p>
            <TextField
              type="file"
              placeholder=""
              className="w-3/4 bg-white"
              style={{
                height: "5px",
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-end gap-4 mt-8">
          <p className="w-full font-bold text-md mt-4"></p>
          <TextField
            multiline
            rows={3}
            type="text"
            placeholder="Employer Details*"
            className=" bg-white mt-4 w-3/4"
          />
        </div>
        <div className="mt-12 gap-4 ">
          <button
            type="submit"
            className="px-4 py-3 text-sm rounded-mg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
