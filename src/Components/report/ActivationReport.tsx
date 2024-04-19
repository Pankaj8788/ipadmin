import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function ActivationReport() {
  return (
    <section className="main-container w-full item-start justify-start gap-6">
      <div className="w-full ">
        <p className="my-5 font-bold">Date Range:</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            className="w-64"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
          <ArrowForwardIcon />
          <TextField
            type="date"
            className="w-64"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col"
        >
          {" "}
          Download Excel
        </button>
      </div>
    </section>
  );
}
