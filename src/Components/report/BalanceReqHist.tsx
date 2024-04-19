import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";
export default function BalanceReqHist() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      dates: "",
      remark: "",
      user: "",
      parent: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      dates: Yup.string().required("Date is required"),
      remark: Yup.string().required("Enter required field"),
      requestId: Yup.string().required("Enter required field"),
      user: Yup.string().required("Enter required field"),
      parent: Yup.string().required("Enter required field"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <section className="main-container w-full justify-start items-start gap-6">
      <div className="w-full ">
        <p className="my-5 font-bold ">Date Range:</p>
        <span className="w-full flex items-center gap-2 pl-6 mt-2">
          <TextField
            type="date"
            name="date"
            className="w-64 bg-white"
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

      <div className="w-full flex justify-between gap-6 mt-8 center content-between">
        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">Status</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-10 rounded-md mb-2 center"
          >
            <option value="">Select</option>
          </select>
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">Bank</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-10 rounded-md mb-2 center"
          >
            <option value="">Select</option>
          </select>
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">Payment Mode</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-10 rounded-md mb-2 center"
          >
            <option value="">Select</option>
          </select>
        </span>
      </div>

      <div className="w-full flex justify-between gap-6 mt-8 center content-between">
        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">Remark</p>
          <TextField
            type="text"
            name="remark"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.remark}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.remark && Boolean(formik.errors.remark)}
            helperText={formik.touched.remark && formik.errors.remark}
          />
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">User</p>
          <TextField
            type="text"
            name="user"
            className=" w-64 bg-white"
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
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">Parent</p>
          <TextField
            type="text"
            name="parent"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.parent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.parent && Boolean(formik.errors.parent)}
            helperText={formik.touched.parent && formik.errors.parent}
          />
        </span>
      </div>

      <div className="w-full flex items-center justify-start gap-6 mt-8">
        <button
          type="button"
          className="rounded-md bg-themeColor text-sm px-4 py-3"
        >
          {" "}
          SEARCH
        </button>

        <button
          type="button"
          className="bg-themeColor rounded-md text-sm px-4 py-3"
        >
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
