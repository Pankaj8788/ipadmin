import React, { useState } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function CircleMasterScreen() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      mobileCode: "",
      operatorName: "",
      series: "",
    },
    validationSchema: Yup.object({
      mobileCode: Yup.string().required("Enter required field"),
      operatorName: Yup.string().required("Enter required field"),
      series: Yup.string().required("Enter required field"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <section className="main-container w-full justify-start items-start">
      <div className="w-full justify-start flex flex-col">
        <p className="capitalize font-bold text-sm">Mobile Code</p>
        <TextField
          type="text"
          name="mobileCode"
          placeholder="Select"
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.mobileCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobileCode && Boolean(formik.errors.mobileCode)}
          helperText={formik.touched.mobileCode && formik.errors.mobileCode}
        />
      </div>

      <div className="w-full justify-start flex flex-col mt-4">
        <p className="capitalize font-bold text-sm">Operator Name</p>
        <TextField
          type="text"
          name="operatorName"
          placeholder="Select"
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.operatorName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.operatorName && Boolean(formik.errors.operatorName)
          }
          helperText={formik.touched.operatorName && formik.errors.operatorName}
        />
      </div>

      <div className="w-full justify-start flex flex-col mt-4 gap-4">
        <p className="capitalize font-bold text-sm">Select Circle</p>
        <select
          name=" "
          id=""
          className=" bg-white h-10 rounded-md mb-2 mt-2 w-2/3"
        >
          <option value="" className="text-[#A1A1A1]"></option>
        </select>
      </div>

      <div className="w-full justify-start flex flex-col mt-4">
        <p className="capitalize font-bold text-sm">Series</p>
        <TextField
          multiline
          rows={4}
          type="text"
          name="series"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.series}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.series && Boolean(formik.errors.series)}
          helperText={formik.touched.series && formik.errors.series}
        />
        <p>
          Refer
          <Link
            className="!text-themeColor"
            href={" https://www.coai.com/msc-codes"}
            target="_blank"
          >
            {" "}
            https://www.coai.com/msc-codes
          </Link>
          for circle details then copy paste the MSC codes in the above box. eg;
          97680-97689 for Mumbai-Aircel.
        </p>
      </div>
      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white transition-all duration-300 ease-in-out active:scale-90  font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          Send Notification
        </button>
      </div>
    </section>
  );
}
