import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function MainPaymentSummaryAepsMatm() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      dates: "",
      admin: "",
      remark: "",
    },
    validationSchema: Yup.object().shape({
      date: Yup.string().required("Date is required"),
      dates: Yup.string().required("Date is required"),
      admin: Yup.string().required("Select required field"),
      remark: Yup.string().required("Enter required field"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 1000);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="main-container w-full justify-start items-start gap-6"
    >
      <div className="w-full">
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

      <div className="w-full mt-8 ">
        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">User</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-9 rounded-md mb-2 center"
          >
            <option value="">All</option>
          </select>
        </span>
      </div>

      <div className="w-full mt-8 flex">
        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold">Payment By</p>
          <TextField
            placeholder="Admin"
            type="text"
            name="admin"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.admin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.admin && Boolean(formik.errors.admin)}
            helperText={formik.touched.admin && formik.errors.admin}
          />
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold">Remark</p>
          <TextField
            type="text"
            name="remark"
            className="w-64 bg-white"
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.remark}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.remark && Boolean(formik.errors.remark)}
            helperText={formik.touched.remark && formik.errors.remark}
          />
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
    </form>
  );
}
