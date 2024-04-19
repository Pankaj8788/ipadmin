import { TextField } from "@mui/material";
import React from "react";

export default function PaymentRequestPage() {
  return (
    <form className="main-container w-full flex flex-col items-start justify-start gap-6">
      <div className="flex gap-6 w-full ">
        <span className="w-full">
          <p className="text-lg capitalize font-bold">Bank</p>
          <select name=" " id="" className="w-72 bg-white h-12  ml-6 mt-5">
            <option value="">ALL</option>
          </select>
        </span>
        <span className="ml-16  w-full ">
          <p className="text-lg capitalize font-bold ">Payment Mode</p>
          <select name=" " id="" className="w-72 bg-white h-12  ml-6 mt-5 ">
            <option value="">ALL</option>
          </select>
        </span>
      </div>

      <div className=" flex w-full ">
        <p className=" font-bold ">User</p>
        <TextField
          type="select"
          name=""
          id=""
          className="ml-5 px-3 py-3 mb-10 mt-4 mr-4  "
        />

        <p className="font-bold pl-6">Parent</p>
        <TextField
          type="text"
          className="ml-5 px-3 py-3 mb-10 mt-4"
          placeholder=""
        />
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
