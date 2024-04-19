import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function ComplaintHistory() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      mobileNumber: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("User is required"),
      mobileNumber: Yup.string().required("Mobile number is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <section className="main-container w-full flex flex-col items-start justify-start gap-6 h-[calc(100vh-9rem)]">
      <div className="w-full justify-start ">
        <p className="my-5 font-bold ">Date Range:</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
          />
          <ArrowForwardIcon />
          <TextField
            type="date"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
          />
        </span>
      </div>

      <div className="w-full justify-start flex flex-col mt-8">
        <span className="w-full">
          <p className="font-bold capitalize">Mobile Number</p>
          <select className="w-72 bg-white h-10 rounded-md mt-6" name="" id="">
            <option value="">Select</option>
          </select>
        </span>
      </div>

      <div className="w-full justify-start flex  mt-8">
        <span className="w-full">
          <p className="font-bold capitalize">User</p>
          <select className="w-72 bg-white h-10 rounded-md mt-6" name="" id="">
            <option value="">Select</option>
          </select>
        </span>
        <span className="w-full">
          <p className="font-bold capitalize">Provider</p>
          <select className="w-72 bg-white h-10 rounded-md mt-6" name="" id="">
            <option value="">Select</option>
          </select>
        </span>
      </div>

      <div className="w-full item-center justify-start gap-6 mt-8">
        <button
          type="submit"
          className="bg-themeColor text-sm rounded-md px-4 py-3"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="submit"
          className="bg-themeColor text-sm rounded-md px-4 py-3 ml-2"
        >
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
