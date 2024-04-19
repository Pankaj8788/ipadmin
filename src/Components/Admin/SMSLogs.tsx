import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";
export default function () {
  const [upload, setUpload] = useState<any>([]);
  const formik = useFormik({
    initialValues: {
      date: "",
      dates: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is Required"),
      dates: Yup.string().required("Date is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="main-container w-full  full justify-start items-start"
    >
      <div className="w-full justify-start items-start mt-2">
        <p className="font-bold capitalize">date range:</p>
        <span className="w-full flex items-center gap-2 pl-2 mt-4">
          <TextField
            type="date"
            name="date"
            className="w-64 bg-white rounded-md"
            inputProps={{
              style: {
                height: "5px",
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
                height: "5px",
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

      <div className="w-full flex items-center justify-start gap-6 mt-6 ">
        <button
          type="button"
          className="rounded-md text-sm bg-themeColor px-4 py-3 text-white  transition-all duration-300 ease-in-out active:scale-90 "
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor text-sm rounded-md px-3 py-3 text-white transition-all duration-300 ease-in-out active:scale-90"
        >
          {" "}
          EXPORT
        </button>
      </div>
    </form>
  );
}
