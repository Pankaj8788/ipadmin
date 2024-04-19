import { TextField } from "@mui/material";
import React from "react";

export default function AddAdmin() {
  return (
    <section className="main-container w-full justify-start items-start">
      <div className="w-full flex flex-col justify-start gap-4">
        <p className="font-bold text-md capitalize">User</p>
        <TextField
          type="text"
          placeholder="Select"
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start gap-4 mt-6">
        <p className="font-bold text-md capitalize">Payment Info</p>
        <TextField
          type="text"
          placeholder=""
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "99px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify start gap 4 mt-6">
        <p className="font-bold text-md capitalize ">Token</p>
        <TextField
          type="text"
          placeholder=""
          className="w-64 bg-white mt-2"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          {" "}
          Recharge
        </button>
      </div>
    </section>
  );
}
