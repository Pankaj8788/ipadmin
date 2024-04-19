import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function Refund() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      select: "",
      mobileNumber: "",
    },
    validationSchema: Yup.object({
      select: Yup.string().required("User is required"),
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
    <section className="main-container w-full h-[calc(100vh-9rem)] flex flex-col items-start justify-start gap-6 my-8">
      <div className="w-full flex  justify-between gap-6">
        <span className="">
          <p className="font-bold capitalize">Recharge Date From :</p>
          <TextField
            type="date"
            className="w-64 mt-4 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>

        <span>
          <p className="font-bold capitalize ">Recharge Date To :</p>
          <TextField
            type="date"
            className="w-64 mt-4 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>

        <span className="">
          <p className=" font-bold text-black ml-4">Date Range :</p>
          <span className="w-full flex items-center gap-2 pl-6 mt-4 ">
            <TextField
              type="date"
              className="w-64 bg-white "
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
        </span>
      </div>

      <div className="w-full flex pt-6 justify-between">
        <span className="w-full">
          <p className="text-lg capitalize font-bold">mobile Number</p>
          <select
            name="select"
            id=""
            className="w-72 bg-white h-10  ml-6 mt-5"
            // value={formik.values.select}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.touched.select && Boolean(formik.errors.select)}
            // helperText={formik.touched.select && formik.errors.select}
          >
            <option value="">Select</option>
          </select>
        </span>
        <span className="w-full center">
          <p className="font-bold">or</p>
        </span>
        <span className="w-full">
          <p className="text-lg font-bold">Tranid</p>
          <TextField
            type=""
            className="w-64 bg-white rounded-md mt-4"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
          />
        </span>
      </div>

      <div className="w-full flex pt-6 items-center justify-start gap-6">
        <span className="w-full">
          <p className="text-lg capitalize font-bold">refund mode</p>
          <select name=" " id="" className="w-72 bg-white h-10  ml-6 mt-5">
            <option value="">Select</option>
          </select>
        </span>
        <span className="w-full center">
          <p className="font-bold">or</p>
        </span>
        <span className="w-full">
          <p className="text-lg capitalize font-bold">provider</p>
          <select name=" " id="" className="w-72 bg-white h-10  ml-6 mt-5">
            <option value="">Select</option>
          </select>
        </span>
      </div>

      <div className="left gap-6 pt-6">
        <button className="px-4 py-3 text-sm rounded-md bg-themeColor font-bold text-white capitalize">
          search
        </button>
        <button className="px-4 py-3 text-sm rounded-md bg-themeColor font-bold text-white capitalize ml-4">
          export
        </button>
      </div>
    </section>
  );
}
