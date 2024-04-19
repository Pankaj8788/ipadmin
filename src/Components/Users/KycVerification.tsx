import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function KycVerification() {
  const [upload, setUpload] = useState<any>([]);
  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("user Name is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="main-container  w-full justify-start items-start"
    >
      <div className="w-full flex flex-col justify-start gap-4">
        <p className="font-bold text-md capitalize">User Name</p>
        <TextField
          type="text"
          name="userName"
          placeholder=""
          className="w-64 bg-white"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
      </div>

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3  text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          {" "}
          Search
        </button>
      </div>
    </form>
  );
}
