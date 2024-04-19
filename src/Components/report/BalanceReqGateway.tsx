import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function BalanceReqGateway() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      parent: "",
      id: "",
      pgname: "",
    },
    validationSchema: Yup.object().shape({
      user: Yup.string().required("User is required"),
      parent: Yup.string().required("Parent is required"),
      id: Yup.string().required("Id required field"),
      pgname: Yup.string().required("Enter required field"),
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

      <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">ID</p>
          <TextField
            type="text"
            name="id"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
          />
        </span>

        <span className="w-full flex flex-col gap-6">
          <p className="font-bold capitalize">PG Name</p>
          <TextField
            type="text"
            name="pgname"
            className=" w-64 bg-white"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.pgname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pgname && Boolean(formik.errors.pgname)}
            helperText={formik.touched.pgname && formik.errors.pgname}
          />
        </span>
      </div>
      <div className="mt-8 ">
        <button
          type="button"
          className="rounded-md bg-themeColor px-7 py-3 text-sm w-fit"
        >
          {" "}
          SEARCH
        </button>
      </div>
    </form>
  );
}
