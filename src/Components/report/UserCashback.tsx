import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";

export default function UserCashback() {
  return (
    <section className="main-container w-full item-start justify-start gap-6">
      <div className="w-full   ">
        <p className="my-5 font-bold ">Date Range:</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            className="w-64"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
          />
          <ArrowForwardIcon />
          <TextField
            type="date"
            className="w-64"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
          />
        </span>
        <button
          type="submit"
          className="px-4 py-3 rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col text-sm  "
        >
          {" "}
          Download Excel
        </button>
      </div>
    </section>
  );
}
