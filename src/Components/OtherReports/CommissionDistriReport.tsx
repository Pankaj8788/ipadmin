import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CommissionDistriReport() {
  return (
    <section className="main-container w-full justify-start items-start gap-6 ">
      <div className="w-full  mt-2 flex gap-6">
        <span className="w-full flex flex-col">
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
        </span>
      </div>

      <div className="w-full  mt-6 flex gap-6">
        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">User:</p>
          <span className="w-full flex items-center gap-2 pl-2 mt-4">
            <TextField
              type="text"
              className="w-64 bg-white rounded-md"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </span>

        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">Tranid:</p>
          <span className="w-full flex items-center gap-2 pl-2 mt-4">
            <TextField
              type="text"
              className="w-64 bg-white rounded-md"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full  mt-6 flex gap-6">
        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">Required:</p>
          <span className="w-full flex items-center gap-2 pl-2 mt-4">
            <TextField
              type="text"
              className="w-64 bg-white rounded-md"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </span>

        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">Mobile Number:</p>
          <span className="w-full flex items-center gap-2 pl-2 mt-4">
            <TextField
              type="text"
              className="w-64 bg-white rounded-md"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full  mt-6 flex gap-6">
        <div className="w-full flex flex-col justify-start gap-4 ">
          <p className="font-bold text-sm capitalize">Provider Type</p>
          <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
            <option value="" className="text-[#A1A1A1]">
              Select
            </option>
          </select>
        </div>
        <div className="w-full flex flex-col justify-start gap-4 ">
          <p className="font-bold text-sm capitalize">Provider</p>
          <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
            <option value="" className="text-[#A1A1A1]">
              Select
            </option>
          </select>
        </div>
      </div>

      <div className="w-full  mt-6 flex gap-6">
        <div className="w-full flex flex-col justify-start gap-4 ">
          <p className="font-bold text-sm capitalize">API</p>
          <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
            <option value="" className="text-[#A1A1A1]">
              All
            </option>
          </select>
        </div>
        <div className="w-full flex flex-col justify-start gap-4 ">
          <p className="font-bold text-sm capitalize">Source</p>
          <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
            <option value="" className="text-[#A1A1A1]">
              All
            </option>
          </select>
        </div>
      </div>

      <div className="w-full flex items-center justify-start gap-6 mt-8">
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor text-sm rounded-md px-4 py-3"
        >
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
