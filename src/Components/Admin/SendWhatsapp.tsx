import React from "react";
import { TextField } from "@mui/material";

export default function SendWhatsapp() {
  return (
    <section className="main-container w-full justify-start item-start gap-4">
      <div className="w-full flex flex-col justify-start item-start">
        <p className="w-full font-bold text-sm">Select Role:</p>
        <TextField
          type="text"
          placeholder="Select"
          className=" bg-white mt-4"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Mobile Number:</p>
        <TextField
          type="text"
          placeholder="Select"
          className=" bg-white mt-4"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Message:</p>
        <TextField
          multiline
          rows={5}
          type="text"
          placeholder=""
          className=" bg-white mt-4"
        />
      </div>

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          Send
        </button>
      </div>
    </section>
  );
}
