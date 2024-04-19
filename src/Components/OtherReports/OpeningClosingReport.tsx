import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OpeningClosingReport() {
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

      <div className="w-full flex items-center justify-start gap-6 mt-8">
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {" "}
          Download Excel
        </button>
        <button></button>
      </div>
    </section>
  );
}
