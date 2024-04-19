import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OperatorWCReport() {
  return (
    <section className="main-container w-full justify-start item-start">
      <div className="w-full flex flex-col">
        <p className="font-bold capitalize">date range:</p>
        <span className="w-full flex items-center gap-2 pl-2 mt-4">
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
        </span>
      </div>

      <div className="w-full flex flex-col mt-4 gap-4">
        <p className="font-bold capitalize">User</p>
        <TextField
          type="text"
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col mt-4 gap-4 justify-start">
        <p className="font-bold capitalize">API</p>
        <select name="" id="" className="w-64 h-10">
          <option value="">Select</option>
        </select>
      </div>

      <div className="w-full flex flex-col mt-4 gap-4 justify-start">
        <p className="font-bold capitalize">Provider Type</p>
        <select name="" id="" className="w-64 h-10">
          <option value="">Select</option>
        </select>
      </div>

      <div className="w-full flex justify-start mt-5 gap-4">
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {""}
          Search
        </button>

        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {""}
          Export
        </button>

        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {""}
          Generate & Email
        </button>
      </div>
    </section>
  );
}
