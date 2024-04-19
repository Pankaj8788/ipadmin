import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function AssignParentUser() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      childUser: "",
      parentUser: "",
      oldParent: "",
      newParent: "",
    },
    validationSchema: Yup.object({
      childUser: Yup.string().required("Child Name is required"),
      parentUser: Yup.string().required("Parent Name is required"),
      oldParent: Yup.string().required("Old Parent Name is required"),
      newParent: Yup.string().required("New Parent Name is required"),
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
      className="main-container justify-center items-center  "
    >
      <div className="w-full center flex flex-col ">
        <span className="w-full  ">
          <p className="w-full capitalize font-bold text-sm">Child User:</p>
          <TextField
            type="text"
            name="childUser"
            className="w-80 bg-white mt-4 "
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.childUser}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.childUser && Boolean(formik.errors.childUser)}
            helperText={formik.touched.childUser && formik.errors.childUser}
          />
        </span>

        <span className="w-full mt-4">
          <p className="w-full capitalize font-bold text-sm">Parent User:</p>
          <TextField
            type="text"
            name="parentUser"
            className="w-80 bg-white mt-4 "
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.parentUser}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.parentUser && Boolean(formik.errors.parentUser)
            }
            helperText={formik.touched.parentUser && formik.errors.parentUser}
          />
        </span>
      </div>
      <button
        type="button"
        className="bg-themeColor rounded-md px-4 py-3 text-sm text-white mt-4"
      >
        {""}
        Assign
      </button>

      <div className="w-full center flex flex-col mt-6 ">
        <span className="w-full  ">
          <p className="w-full capitalize font-bold text-sm">Old Parent:</p>
          <TextField
            type="text"
            name="oldParent"
            className="w-80 bg-white mt-4 "
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.oldParent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.oldParent && Boolean(formik.errors.oldParent)}
            helperText={formik.touched.oldParent && formik.errors.oldParent}
          />
        </span>

        <span className="w-full mt-4">
          <p className="w-full capitalize font-bold text-sm">New Parent:</p>
          <TextField
            type="text"
            name="newParent"
            className="w-80 bg-white mt-4 "
            inputProps={{
              style: {
                height: "6px",
              },
            }}
            value={formik.values.newParent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newParent && Boolean(formik.errors.newParent)}
            helperText={formik.touched.newParent && formik.errors.newParent}
          />
        </span>
      </div>
      <button
        type="button"
        className="bg-themeColor rounded-md px-4 py-3 text-sm text-white mt-4"
      >
        {""}
        Assign
      </button>
    </form>
  );
}
