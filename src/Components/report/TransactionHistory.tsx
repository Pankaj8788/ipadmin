import React, { useState } from "react";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";
export default function Pendings_2() {
  const [upload, setUpload] = useState<any>([]);

  const formik = useFormik({
    initialValues: {
      user: "",
      mobileNumber: "",
      transactionId: "",
      requestId: "",
      status: "",
      amount: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("User is required"),
      mobileNumber: Yup.string().required("Mobile number is required"),
      transactionId: Yup.string().required("Transaction ID is required"),
      requestId: Yup.string().required("Request Id is required"),
      status: Yup.string().required("Status is required"),
      amount: Yup.string().required("Amount  is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <section className="w-full main-container flex flex-col gap-6">
      <section className="w-full flex items-start justify-between gap-6 h-[calc(100vh-9rem)]">
        <div className="w-full flex flex-col items-start justify-start gap-6 ">
          <div className="mr-10">
            <p className="font-bold capitalize">date range</p>
            <span className="w-full flex items-center gap-2 pl-6 mt-2">
              <TextField
                type="date"
                className="w-64 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
              <ArrowForwardIcon />
              <TextField
                type="date"
                className="w-64 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
            </span>
          </div>

          <div className="w-full flex items-center justify-between">
            <span className="w-full  ">
              <p className="font-bold capitalize">mobile number</p>
              <TextField
                type="text"
                name="mobileNumber"
                className="w-64  mt-2 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.user && Boolean(formik.errors.mobileNumber)
                }
                helperText={formik.touched.user && formik.errors.mobileNumber}
              />
            </span>
            <span className="w-full ">
              <p className="font-bold capitalize">user</p>

              <TextField
                type="text"
                name="user"
                className="w-64   mt-2 bg-white"
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
          </div>

          <div className="w-full flex items-center justify-between">
            <span className="w-full   ">
              <p className="font-bold capitalize">transaction id</p>
              <TextField
                type="text"
                name="transactionId"
                className="w-64  mt-2 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                value={formik.values.transactionId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.transactionId &&
                  Boolean(formik.errors.transactionId)
                }
                helperText={
                  formik.touched.transactionId && formik.errors.transactionId
                }
              />
            </span>
            <span className="w-full ">
              <p className="font-bold capitalize">request id</p>

              <TextField
                type="text"
                name="requestId"
                className="w-64  mt-2 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                value={formik.values.requestId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.requestId && Boolean(formik.errors.requestId)
                }
                helperText={formik.touched.requestId && formik.errors.requestId}
              />
            </span>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <span className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Show only blank op txnx</p>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Show only blank response</p>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Show only complaints</p>
            </span>
            <span className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>disable paging</p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-6 pl-10">
          <div>
            <p className="font-bold capitalize">status</p>
            <TextField
              type="text"
              name="status"
              className="w-64 mt-2 ml-6 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            />
          </div>

          {/* <div>
            <p className="font-bold capitalize">provider type</p>
            <select name="" id="" className="w-64 h-10 rounded-md mt-2 ml-6">
              <option value="">All</option>
            </select>
          </div> */}

          {/* <div>
            <p className="font-bold capitalize">API</p>
            <select
              name=""
              id=""
              className="w-64 h-10 rounded-md mt-2 ml-6 bg-white"
            >
              <option value="">All</option>
            </select>
          </div> */}

          {/* <div>
            <p className="font-bold capitalize">source</p>
            <select
              name=""
              id=""
              className="w-64 h-10 rounded-md mt-2 ml-6 bg-white"
            >
              <option value="">All</option>
            </select>
          </div> */}

          {/* <div className="w-full">
            <p className="font-bold capitalize">amount</p>
            <div className="relative mt-2 ml-6  ">
              <TextField
                type="number"
                name="amount"
                className="w-64 bg-white"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
              />
            </div>
          </div> */}
        </div>
      </section>
      <div className="center gap-6">
        <button className="px-8 py-2 rounded-md bg-themeColor font-bold text-white capitalize">
          search
        </button>
        <button className="px-8 py-2 rounded-md bg-themeColor font-bold text-white capitalize">
          export
        </button>
      </div>
      <span className="w-full h-[1px] bg-gray-800"></span>
      {/* <div>
        <div>
          <p className="font-bold capitalize">apply action</p>
          <span className="w-full flex justify-start gap-4">
            <select
              name=""
              id=""
              className="w-32 h-12 rounded-md mt-2 ml-6 bg-[#767778]"
            >
              <option value="">Action</option>
            </select>
            <button className="text-white font-bold px-8 rounded-md bg-themeColor">
              go
            </button>
          </span>
        </div>
        <div>
          <p className="font-bold capitalize">Send to API</p>
          <select
            name=""
            id=""
            className="w-32 h-12 rounded-md mt-2 ml-6 bg-[#767778]"
          >
            <option value="">Action</option>
          </select>
        </div>
        <div className="flex gap-2 pb-8">
          <span className="flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <p>Show only complaints</p>
          </span>
          <button className="text-white font-bold py-2 px-8 rounded-md bg-themeColor">
            send
          </button>
        </div>
      </div> */}
    </section>
  );
}
