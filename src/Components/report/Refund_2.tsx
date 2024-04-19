import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function Refund_2() {
  return (
    <section className="main-container w-full flex flex-col items-start justify-start gap-6 h-[calc(100vh-9rem)]">
      <div className="w-full justify-start ">
        <p className="my-5 font-bold ">Date Range:</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            className="w-64 bg-white "
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
          <ArrowForwardIcon />
          <TextField
            type="date"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>
      </div>
      <div className="flex w-full gap-6 ">
        <span className="w-full">
          <p className="text-sm capitalize font-bold">Mobile Number</p>
          <select name=" " id="" className="w-72 bg-white h-10 rounded-md mt-6">
            <option value="">Select</option>
          </select>
        </span>
        <span className="ml-16 flex w-full gap-6">
          <p className="text-sm capitalize font-bold ">API</p>
          <select
            name=" "
            id=""
            className="w-72 bg-white h-10 rounded-md mb-2 mt-8 items-center pt-2 "
          >
            <option value="">ALL</option>
          </select>
        </span>
      </div>

      <div className="flex w-full gap-6 ">
        <span className="w-full">
          <p className="text-sm capitalize font-bold">User</p>
          <select name=" " id="" className="w-72 bg-white h-10 rounded-md mt-6">
            <option value="">Select</option>
          </select>
        </span>
        <span className=" flex w-full gap-6">
          <p className="text-sm capitalize font-bold ">Provider</p>
          <select
            name=" "
            id=""
            className="w-72 bg-white h-10 rounded-md mb-2 mt-8 items-center pt-2 "
          >
            <option value="">ALL</option>
          </select>
        </span>
      </div>

      <div className="w-full item-center justify-start gap-6 mt-8">
        <button
          type="submit"
          className="bg-themeColor text-sm rounded-md px-4 py-3"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="submit"
          className="bg-themeColor text-sm rounded-md px-4 py-3 ml-2"
        >
          {" "}
          EXPORT
        </button>
      </div>

      <div>
        <p className="font-bold text-sm capitalize">Apply Bulk Action:</p>
        <span>
          <select
            name=""
            id=""
            className="w-32 h-12 rounded-md mt-2 ml-6 px-4 py-3 bg-[#767778]"
          >
            <option value="">Action</option>
          </select>
          <button className="text-white font-bold  rounded-md bg-themeColor px-4 py-3 ml-2">
            Go
          </button>
        </span>
      </div>
    </section>
  );
}
