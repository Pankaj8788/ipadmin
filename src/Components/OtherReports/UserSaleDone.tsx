import React from "react";
import { TextField } from "@mui/material";

export default function UserSaleDone() {
  return (
    <section className="main-container w-full justify-start items-start">
      <div className="w-full  mt-6 flex gap-6">
        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">Date:</p>
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
          </span>
        </span>

        <span className="w-full flex flex-col">
          <p className="font-bold capitalize">Min Sale:</p>
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

      <div
        className="w-full mt-6
       ml-4"
      >
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {" "}
          Download Excel
        </button>
      </div>
    </section>
  );
}
