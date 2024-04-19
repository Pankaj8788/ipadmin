import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function Mpsg() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      dates: "",
      paymentBy: "",
    },
    validationSchema: Yup.object().shape({
      date: Yup.string().required("Date is required"),
      dates: Yup.string().required("Date is required"),
      paymentBy: Yup.string().required("Enter required field"),
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
    <section className="main-container w-full flex flex-col items-start justify-start gap-6 h-[calc(100vh-9rem)]">
      <div className="w-full justify-start ">
        <p className="my-5 font-bold text-black">Date Range</p>
        <span className="w-full flex items-center gap-2  mt-2">
          <TextField
            type="date"
            name="date"
            className="w-64 bg-white "
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

      <div className="w-full flex justify-between gap-6 mt-6">
        <span className="w-full">
          <p className="font-bold">User</p>
          <select className="w-72 bg-white h-10 ml- mt-5 " name="" id="">
            <option value="">Select</option>
          </select>
        </span>
        <span className="w-full">
          <p className="font-bold">Payment by</p>
          <TextField
            type="text"
            name="paymentBy"
            className="w-64 bg-white  ml-14 mt-5 "
            placeholder=""
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.paymentBy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.paymentBy && Boolean(formik.errors.paymentBy)}
            helperText={formik.touched.paymentBy && formik.errors.paymentBy}
          />
        </span>
      </div>

      <div className="w-full flex justify-between gap-6 ">
        <span className="w-full">
          <p className="font-bold">Remark</p>
          <select className="w-72 bg-white h-10  mt-5 " name="" id="">
            <option value="">All</option>
          </select>
        </span>
        <span className="w-full ">
          <p className="font-bold">UPI App:</p>
          <select
            name=""
            id=""
            className="px-4 py-3 ml-14 mt-5 rounded-md bg-[#767778]"
          >
            <option value="">All</option>
          </select>
        </span>
      </div>

      <div>
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
