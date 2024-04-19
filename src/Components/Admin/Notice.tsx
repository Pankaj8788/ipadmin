import React from "react";
import { TextField } from "@mui/material";

export default function Notice() {
  return (
    <section className="main-container w-full justify-start items-start">
      <div className="w-full flex flex-col justify-start gap-4">
        <p className="font-bold text-sm capitalize">Start Date</p>
        <TextField
          type="text"
          placeholder=""
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>
      <div className="w-full flex flex-col justify-start gap-4 mt-8">
        <p className="font-bold text-sm capitalize">End Date</p>
        <TextField
          type="text"
          placeholder=""
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start gap-4 mt-8">
        <p className="font-bold text-sm capitalize">Message</p>
        <TextField
          type="text"
          placeholder=""
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "99px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start gap-4 mt-8">
        <p className="font-bold text-sm capitalize">Role</p>
        <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
          <option value="" className="text-[#A1A1A1]">
            Administrator
          </option>
        </select>
      </div>

      <div className="w-full flex justify start mt-8">
        <span className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Is Enable</p>
        </span>
      </div>

      <div className="w-full flex flex-col justify-start gap-4 mt-8">
        <p className="font-bold text-sm capitalize">Color</p>
        <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
          <option value="" className="text-[#A1A1A1]">
            Blue
          </option>
        </select>
      </div>

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          Insert
        </button>
      </div>
    </section>
  );
}
