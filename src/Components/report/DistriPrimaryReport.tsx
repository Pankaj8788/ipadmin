import React from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function DistriPrimaryReport() {
  const formik = useFormik({
    initialValues: {
      username: "",
      billingMin: "",
      billingMax: "",
      billingTarget: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User is required"),
      billingMin: Yup.string().required("Enter required field"),
      billingMax: Yup.string().required("Enter required field"),
      billingTarget: Yup.string().required("Enter required field"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <section className="main-container w-full ">
      <div className="w-full flex  justify-between gap-6 ">
        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">Username</p>
          <TextField
            type="text"
            name="username"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </span>
        <span className="w-full  flex flex-col gap-6">
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

      <div className=" w-full flex justify-between gap-6 mt-5 center content-between">
        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">Billing Min</p>
          <TextField
            type="text"
            name="billingMin"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.billingMin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.billingMin && Boolean(formik.errors.billingMin)
            }
            helperText={formik.touched.billingMin && formik.errors.billingMin}
          />
        </span>
        <span className="w-full flex flex-col gap-6 ">
          <p className="font-bold capitalize">Billing Max</p>
          <TextField
            type="text"
            name="billingMax"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.billingMax}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.billingMax && Boolean(formik.errors.billingMax)
            }
            helperText={formik.touched.billingMax && formik.errors.billingMax}
          />
        </span>
        <span className="w-full flex flex-col gap-6 mt-8">
          <p className="font-bold capitalize">Billing Target</p>
          <TextField
            type="text"
            name="billingTarget"
            className=" w-64 bg-white "
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.billingTarget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.billingTarget &&
              Boolean(formik.errors.billingTarget)
            }
            helperText={
              formik.touched.billingTarget && formik.errors.billingTarget
            }
          />
          <span className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>Apply Target</p>
          </span>
        </span>
      </div>

      <div className="w-full flex items-center justify-start gap-6 ">
        <button type="button" className="rounded-md bg-themeColor px-7 py-3">
          {" "}
          SEARCH
        </button>

        <button type="button" className="bg-themeColor rounded-md px-7 py-3">
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
