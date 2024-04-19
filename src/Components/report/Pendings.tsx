import { TextField } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Pendings() {
  return (
    <form className="main-container w-full flex flex-col items-start justify-start gap-6">
      <div className="flex w-full justify-between gap-6  ">
        <div className="w-full flex flex-col">
          <p className="font-bold capitalize">date range:</p>
          <div className="w-full flex items-center gap-2 pl-2 mt-4">
            <TextField
              type="date"
              className="w-64 bg-white rounded-md"
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
          </div>
        </div>
        <span className="w-full text-lg capitalize pt-3">
          <p className="font-bold">user</p>
          <TextField
            type="text"
            className="w-72 bg-white h-12 ml-14 mt-5 "
            placeholder=""
          />
        </span>
      </div>

      <div className="flex gap-6 w-full ">
        <span className="w-full">
          <p className="text-lg capitalize font-bold">Provider</p>
          <select name=" " id="" className="w-72 bg-white h-12  ml-6 mt-5">
            <option value="">Select</option>
          </select>
        </span>
        <span className="ml-16 flex w-full ">
          <p className="text-lg capitalize font-bold ">API</p>
          <select
            name=" "
            id=""
            className="w-72 bg-white h-12 rounded-md mb-2 mt-8 items-center pt-2 "
          >
            <option value="">ALL</option>
          </select>
        </span>
      </div>

      <button
        type="submit"
        className="px-8 py-3 rounded-md text-white font-bold bg-themeColor mb-10 mt-4"
      >
        {" "}
        SUBMIT
      </button>
    </form>
  );
}
