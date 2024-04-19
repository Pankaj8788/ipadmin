import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function BalanceRequests() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      parent: "",
    },
    validationSchema: Yup.object().shape({
      user: Yup.string().required("User  is required"),
      parent: Yup.string().required("Parent  is required"),
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
    <section className="main-container w-full justify-start items-start gap-6">
      <div className="w-full flex justify-between gap-6  center content-between">
        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">Bank</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-9 rounded-md mb-2 center"
          >
            <option value="">All</option>
          </select>
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="capitalize font-bold ">Payment Mode</p>
          <select
            name=" "
            id=""
            className="w-60 bg-white h-9 rounded-md mb-2 center"
          >
            <option value="">ALL</option>
          </select>
        </span>
      </div>

      <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
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
        <button type="button" className="rounded-md bg-themeColor px-7 py-3">
          {" "}
          SEARCH
        </button>
      </div>
    </section>
  );
}
