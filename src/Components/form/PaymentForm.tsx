import { TextField } from "@mui/material";
import React from "react";

export default function PaymentForm() {
  return (
    <section className="main-container w-full flex flex-col items-start justify-start">
      <div className="w-full flex flex-col justify start gap 4 mt-6">
        <p className="font-bold text-md capitalize ">Name</p>
        <TextField
          type="text"
          name="name"
          placeholder=""
          className="w-64 bg-white mt-2"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>
      <div className="w-full flex flex-col justify start gap 4 mt-6">
        <p className="font-bold text-md capitalize ">Amount</p>
        <TextField
          type="text"
          name="number"
          placeholder=""
          className="w-64 bg-white mt-2"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>
      <div className="w-full flex flex-col justify start gap 4 mt-6">
        <p className="font-bold text-md capitalize ">User Id</p>
        <TextField
          type="text"
          name="text"
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
          Pay Now
        </button>
      </div>
    </section>
  );
}
