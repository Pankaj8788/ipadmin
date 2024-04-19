import React from "react";
import { TextField } from "@mui/material";

export default function RetailerSaleNotDone() {
  return (
    <section className="Main-container w-full justify-start">
      <div className="w-full justify-start ml-4">
        <p className="w-full text-sm capitalize font-bold">Date</p>
        <TextField
          type="date"
          className="w-64 bg-white rounded-md mt-4"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full mt-4 ml-4">
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
