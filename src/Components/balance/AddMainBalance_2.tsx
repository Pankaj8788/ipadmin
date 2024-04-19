import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function AddMainBalance_2() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      amount: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("User Name is required"),
      amount: Yup.string().required("Amount is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <form className="main-container w-full flex flex-col items-start justify-start gap-6">
      <div className="w-full flex">
        <span className="w-full">
          <p className="text-lg capitalize">User</p>
          <TextField
            type="text"
            name="user"
            className="w-72 bg-white mt-2"
            placeholder=""
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
        <span className="w-full flex justify-start items-center ">
          <input type="checkbox" />
          <p className="text-black items-center pl-3">
            Auto-Calculate Flat Commission
          </p>
        </span>
      </div>

      <div className="w-full flex justify-between">
        <span>
          <p className="text-lg capitalize ">Amount:</p>
          <TextField
            type="text"
            name="amount"
            className="w-72 bg-white mt-2"
            placeholder=""
            inputProps={{
              style: {
                height: "3px",
              },
            }}
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </span>
      </div>

      <div className="W-full ">
        <span>
          <p className="text-lg capitalize">Payment Mode:</p>
          <select
            name=" "
            id=""
            className="w-72 bg-white h-10 rounded-md mb-2 mt-2"
          >
            <option value="">Credit</option>
          </select>
        </span>
      </div>
      <button
        type="submit"
        className="px-4 py-3 text-sm rounded-md text-white font-bold bg-themeColor mb-10 mt-4"
      >
        {" "}
        SUBMIT
      </button>
    </form>
  );
}
