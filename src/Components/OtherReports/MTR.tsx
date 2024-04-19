import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MTR() {
  return (
    <section className="main-container w-full justify-start item-start gap-4">
      <div className="w-full flex">
        <span className="w-full justify-start ml-4">
          <p className="w-full text-sm capitalize font-bold">User</p>
          <TextField
            type="text"
            className="w-64 bg-white rounded-md mt-4"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>
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
