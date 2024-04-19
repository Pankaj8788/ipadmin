import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function IPwhitelistscreen() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      ipAddress: "",
    },
    validationSchema: Yup.object({
      ipAddress: Yup.string().required("Enter required field"),
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
      className="main-container w-full  full justify-start items-start"
    >
      <div className="w-full justify-start items-start mt-2">
        <p className="font-bold capitalize text-sm">Add IP </p>
        <span className="w-full flex items-center gap-2 pl-1 mt-4">
          <TextField
            type="text"
            name="ipAddress"
            className="w-64 bg-white rounded-md"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.ipAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ipAddress && Boolean(formik.errors.ipAddress)}
            helperText={formik.touched.ipAddress && formik.errors.ipAddress}
          />
        </span>
      </div>

      <div className="w-full flex items-center justify-start gap-6 mt-6 ">
        <button
          type="button"
          className="rounded-md text-sm bg-themeColor px-3 py-3  text-white transition-all duration-300 ease-in-out active:scale-90 "
        >
          {" "}
          ADD
        </button>
      </div>
    </form>
  );
}
