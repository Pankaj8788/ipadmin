import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";

export default function WebLogsArchive() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      filter: "",
      level: "",
      exception: "",
      thread: "",
      date: "",
      dates: "",
      rows: "",
    },
    validationSchema: Yup.object({
      filter: Yup.string().required("Enter required field"),
      level: Yup.string().required("Enter required field"),
      exception: Yup.string().required("Enter required field"),
      thread: Yup.string().required("Enter required field"),
      date: Yup.string().required("select required field"),
      dates: Yup.string().required("select required field"),
      rows: Yup.string().required("Enter required field"),
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
      className="main-container w-full justify-start items-start gap-4"
    >
      <div className="w-full justify-start flex flex-col">
        <p className="capitalize font-bold text-sm">Filter</p>
        <TextField
          type="text"
          name="filter"
          placeholder="Select"
          className=" bg-white w-2/3 mt-4 "
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.filter}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.filter && Boolean(formik.errors.filter)}
          helperText={formik.touched.filter && formik.errors.filter}
        />
      </div>

      <div className="w-full justify-start flex flex-col mt-4">
        <p className="capitalize font-bold text-sm">Level</p>
        <TextField
          type="text"
          name="level"
          placeholder="Select"
          className=" bg-white mt-4 w-2/3 "
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.level}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.level && Boolean(formik.errors.level)}
          helperText={formik.touched.level && formik.errors.level}
        />
      </div>

      <div className="w-full justify-start flex flex-col mt-4 gap-4">
        <p className="capitalize font-bold text-sm">Logger</p>
        <select
          name=" "
          id=""
          className=" bg-white h-10 rounded-md mb-2 mt-2 w-2/3 "
        >
          <option value="" className="text-[#A1A1A1]"></option>
        </select>
      </div>

      <div className="w-full justify-start flex flex-col mt-4">
        <p className="capitalize font-bold text-sm">Exception</p>
        <TextField
          type="text"
          name="exception"
          placeholder=" "
          className=" bg-white mt-4 w-2/3"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.exception}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.exception && Boolean(formik.errors.exception)}
          helperText={formik.touched.exception && formik.errors.exception}
        />
      </div>

      <div className="w-full flex justify-between mt-4">
        <span>
          <p className="capitalize font-bold text-sm">Thread</p>
          <TextField
            type="text"
            name="thread"
            placeholder=" "
            className=" bg-white mt-4 "
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.thread}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.thread && Boolean(formik.errors.thread)}
            helperText={formik.touched.thread && formik.errors.thread}
          />
        </span>
        <span className="justify-end mt-1">
          <p className="font-bold capitalize">ID range:</p>
          <span className="w-full flex items-center gap-2 pl-6 mt-2">
            <TextField
              type=""
              name="date"
              className="w-64 bg-white mt-1"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
            <ArrowForwardIcon />
            <TextField
              type=""
              name="dates"
              className="w-64 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              value={formik.values.dates}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dates && Boolean(formik.errors.dates)}
              helperText={formik.touched.dates && formik.errors.dates}
            />
          </span>
        </span>
      </div>

      <div className="w-full justify-start items-start mt-4 ">
        <p className="capitalize font-bold text-sm">Rows to select</p>
        <TextField
          type="number"
          name="rows"
          placeholder="200"
          className=" bg-white mt-4 "
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={formik.values.rows}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rows && Boolean(formik.errors.rows)}
          helperText={formik.touched.rows && formik.errors.rows}
        />
      </div>

      <div className="mt-6 gap-4">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg  text-white transition-all duration-300 ease-in-out active:scale-90 font-bold bg-themeColor mb-10 mt-4 flex flex-col "
        >
          Send Notification
        </button>
      </div>
    </form>
  );
}
