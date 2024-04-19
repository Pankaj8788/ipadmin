import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function IndividualReport() {
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
    <form
      onSubmit={formik.handleSubmit}
      className="main-container w-full justify-start items-start"
    >
      <div className="w-full flex flex-col">
        <p className="font-bold capitalize">date range:</p>
        <div className="w-full flex items-center gap-2 pl-2 mt-4">
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
        </div>
      </div>

      <div className="w-full justify-start mt-4">
        <p className="w-full text-sm capitalize font-bold">User</p>
        <TextField
          type="text"
          name="user"
          className="w-64 bg-white rounded-md mt-4"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.user}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.user && Boolean(formik.errors.user)}
          helperText={formik.touched.user && formik.errors.user}
        />
      </div>

      <div className="w-full justify-start mt-4">
        <p className="w-full text-sm capitalize font-bold">Mobile Number</p>
        <TextField
          type="text"
          name="mobileNumber"
          className="w-64 bg-white rounded-md mt-4"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
          }
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
        />
      </div>
      <div className="w-full justify-start flex flex-col mt-4 gap-4">
        <p className="w-full capitalize text-sm font-bold">Provider:</p>
        <select name="" id="" className="w-64 h-10">
          <option value="">select</option>
        </select>
      </div>

      <div className="w-full justify-start flex flex-col mt-4 gap-4">
        <p className="w-full capitalize text-sm font-bold">Status:</p>
        <select name="" id="" className="w-64 h-10">
          <option value="">select</option>
        </select>
      </div>

      <div className="w-full flex items-center justify-start gap-6 mt-8">
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3 text-white"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor text-sm rounded-md px-4 py-3 text-white"
        >
          {" "}
          EXPORT
        </button>

        <button
          type="button"
          className="bg-themeColor text-sm rounded-md px-4 py-3 text-white"
        >
          {""}
          Generate & Email
        </button>
      </div>
    </form>
  );
}
