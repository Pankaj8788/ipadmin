import React from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MainPaymentGatewayTwo() {
  return (
    <section className="main-container w-full flex flex-col items-start justify-start gap-6 h-[calc(100vh-9rem)]">
      <div className="w-full justify-start ">
        <p className="my-5 font-bold text-black">Date Range</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            className="w-64 bg-white"
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
      <div className="w-full flex justify-between gap-6 ">
        <span className="w-full">
          <p className="font-bold">User</p>
          <select className="w-72 bg-white h-12 ml-14 mt-5 " name="" id="">
            <option value="">Select</option>
          </select>
        </span>
        <span className="w-full">
          <p className="font-bold">Payment by</p>
          <TextField
            type="text"
            className="w-72 bg-white h-12 ml-14 mt-5 "
            placeholder=""
          />
        </span>
      </div>
      <div className="w-full flex justify-between gap-6 ">
        <span className="w-full">
          <p className="font-bold">Payment By</p>
          <TextField
            className="w-72 bg-white h-12 ml-14 mt-5 "
            name=""
            id=""
            type="text"
            placeholder="Admin"
          />
        </span>
        <span className="w-full">
          <p className="font-bold">Remark</p>
          <TextField
            type="text"
            className="w-72 bg-white h-12 ml-14 mt-5 "
            placeholder=""
          />
        </span>
      </div>
      <div>
        <button className="px-8 py-2 rounded-md bg-themeColor font-bold text-white capitalize">
          search
        </button>
        <button className="px-8 py-2 rounded-md bg-themeColor font-bold text-white capitalize ml-4">
          export
        </button>
      </div>
    </section>
  );
}
