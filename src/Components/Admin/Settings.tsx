import React, { useState } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function Settings() {
  const [upload, setUpload] = useState<any>([]);
  const formik = useFormik({
    initialValues: {
      adminMobile: "",
      email: "",
      username: "",
      name: "",
      gst: "",
      playstore: "",
      link: "",
      segment: "",
      key: "",
      payU: "",
      script: "",
      custom: "",
    },
    validationSchema: Yup.object({
      adminMobile: Yup.string().required("Enter Mobile Number"),
      email: Yup.string().required("Enter email address"),
      username: Yup.string().required("Enter required field"),
      name: Yup.string().required("Enter required field"),
      gst: Yup.string().required("Enter required field"),
      playstore: Yup.string().required("Enter required field"),
      link: Yup.string().required("Enter required field"),
      segment: Yup.string().required("Enter required field"),
      key: Yup.string().required("Enter required field"),
      payU: Yup.string().required("Enter required field"),
      script: Yup.string().required("Enter required field"),
      custom: Yup.string().required("Enter required field"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    },
  });
  return (
    <section className="main-container w-full justify-start item-start gap-4">
      <div className="w-full flex flex-col justify-start item-start">
        <p className="w-full font-bold text-sm">Admin Mobile Numbe:</p>
        <TextField
          type="text"
          name="adminMobile"
          placeholder="Select"
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.adminMobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.adminMobile && Boolean(formik.errors.adminMobile)
          }
          helperText={formik.touched.adminMobile && formik.errors.adminMobile}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Admin Email ID:</p>
        <TextField
          type="text"
          name="email"
          placeholder="Select"
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Admin Username:</p>
        <TextField
          type="text"
          name="username"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
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
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Name:</p>
        <TextField
          type="text"
          name="name"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </div>
      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">GSTIN:</p>
        <TextField
          type="text"
          name="gst"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.gst}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gst && Boolean(formik.errors.gst)}
          helperText={formik.touched.gst && formik.errors.gst}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Google PlayStore Link:</p>
        <TextField
          multiline
          rows={3}
          name="playstore"
          type="text"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          value={formik.values.playstore}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.playstore && Boolean(formik.errors.playstore)}
          helperText={formik.touched.playstore && formik.errors.playstore}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">APK Link:</p>
        <TextField
          type="text"
          name="link"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.link}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.link && Boolean(formik.errors.link)}
          helperText={formik.touched.link && formik.errors.link}
        />
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Segment Integration Key:</p>
        <TextField
          type="text"
          name="segment"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.segment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.segment && Boolean(formik.errors.segment)}
          helperText={formik.touched.segment && formik.errors.segment}
        />
        <p>
          For more info visit:
          <Link
            className="!text-themeColor"
            href={" https://www.segment.com"}
            target="_blank"
          >
            {" "}
            https://www.segment.com
          </Link>
        </p>
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Firebase Server Key:</p>
        <TextField
          type="text"
          name="key"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.key}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.key && Boolean(formik.errors.key)}
          helperText={formik.touched.key && formik.errors.key}
        />
        <p>
          For more info visit:
          <Link
            className="!text-themeColor"
            href={"  https://firebase.google.com/"}
            target="_blank"
          >
            {" "}
            https://firebase.google.com/
          </Link>
        </p>
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">PayU Button URL:</p>
        <TextField
          multiline
          rows={3}
          type="text"
          name="payU"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          value={formik.values.payU}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.payU && Boolean(formik.errors.payU)}
          helperText={formik.touched.payU && formik.errors.payU}
        />
        <p className="w-full  text-sm">If set, it will appear on login page</p>
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Custom Script:</p>
        <TextField
          multiline
          rows={5}
          type="text"
          name="script"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          value={formik.values.script}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.script && Boolean(formik.errors.script)}
          helperText={formik.touched.script && formik.errors.script}
        />
        <p className="w-full  text-sm">
          You can add any custom scripts here, eg; Google Analytics
        </p>
      </div>

      <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Custom Script:</p>
        <TextField
          multiline
          rows={5}
          type="text"
          name="custom"
          placeholder=""
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.custom}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.custom && Boolean(formik.errors.custom)}
          helperText={formik.touched.custom && formik.errors.custom}
        />
        <p>
          For more info visit:
          <Link
            className="!text-themeColor"
            href={"  https://www,tawk.to"}
            target="_blank"
          >
            {" "}
            https://www,tawk.to
          </Link>
        </p>
      </div>

      {/* <div className="w-full flex flex-col justify-start item-start mt-8">
        <p className="w-full font-bold text-sm">Message:</p>
        <TextField
          multiline
          rows={5}
          type="text"
          placeholder=""
          className=" bg-white mt-4"
        />
      </div> */}

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col transition-all duration-300 ease-in-out active:scale-90 "
        >
          Save
        </button>
      </div>
    </section>
  );
}
