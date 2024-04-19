import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function MainPaymentSummary() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      date: "",
      dates: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("User Name is required"),
      date: Yup.string().required("Select Date"),
      dates: Yup.string().required("Select Date"),
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
            name="date"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
          <ArrowForwardIcon />
          <TextField
            type="date"
            name="dates"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.dates}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dates && Boolean(formik.errors.dates)}
            helperText={formik.touched.dates && formik.errors.dates}
          />
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-6 ">
        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">Username</p>
          <TextField
            type="text"
            name="user"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "3px",
              },
            }}
            value={formik.values.user}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.user && Boolean(formik.errors.user)}
            helperText={formik.touched.user && formik.errors.user}
          />
        </span>
        <span className="w-full  flex flex-col gap-4">
          <p className="capitalize font-bold ">Role</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-9 rounded-md mb-2 center"
          >
            <option value="">Select</option>
          </select>
        </span>
      </div>

      <div className="w-full flex flex-col gap-6 mt-4">
        <span className="w-full">
          <p className="font-bold capitalize">Remark</p>
          <select className="w-72 bg-white h-9 rounded-md mt-6" name="" id="">
            <option value="">All</option>
          </select>
        </span>
      </div>

      <div className="w-full flex items-center justify-start gap-6  mt-8">
        <button
          type="button"
          className="rounded-md text-sm bg-themeColor px-4 py-3 "
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor text-sm rounded-md px-4 py-3"
        >
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
