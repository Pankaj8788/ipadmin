import { TextField } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function ChangeMobileNoKYC() {
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
    <section className="main-container justify-center items-center ">
      <div className="">
        <div className="w-full flex flex-col gap-6 mt-6  ">
          <p className="capitalize text-sm font-bold ">User Name:</p>
          <TextField
            type="text"
            name="user"
            className="w-64 bg-white "
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
        <div className="w-full flex flex-col gap-6  mt-6 ">
          <p className="capitalize text-sm font-bold ">
            Enter New Mobile Number:
          </p>
          <TextField
            type="text"
            name="mobileNumber"
            className="w-64 bg-white "
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
            helperText={
              formik.touched.mobileNumber && formik.errors.mobileNumber
            }
          />
        </div>
        <button
          type="button"
          className="bg-themeColor rounded-md px-4 py-3 text-sm text-white mt-4 "
        >
          {" "}
          Change
        </button>
      </div>
    </section>
  );
}
