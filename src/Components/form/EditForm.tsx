import { TextField } from "@mui/material";
import React from "react";

export default function EditForm() {
  return (
    <form className="main-container w-full ">
      <div className="w-full center ">
        <p className="font-semibold capitalize text-lg ">
          New Registered Channal Partner
        </p>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-8">
        <span className="w-full flex  items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize"> Name</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="name"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">Email</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="email"
              className=" w-64 bg-white "
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Middle Name</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="middle_name"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">Mobile Number</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="mobile_number"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Last Name</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="last_name"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">Pin code</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="pin_code"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Outlet Name</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="outlet_name"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">District</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="district"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Adhar Card Number</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="aadharcard_number"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">States</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="state"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">GSTIN</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="gstin"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">City</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="city"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Date Of Birth</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="date"
              name="date_of_birth"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">Alternate Number</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="alternate_number"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Pancard Number</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="pancard_number"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full"></span>
      </div>

      <div className="w-full flex  justify-between gap-6 mt-4">
        <span className="w-full flex items-center justify-between gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">Bank A/C Number</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="bank_account_number"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className="w-full  flex  gap-4 justify-between items-center">
          <span className="w-full flex items-center justify-end">
            <p className="capitalize font-bold ">Address</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              multiline
              rows={2}
              type="text"
              name="address"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
      </div>

      <div className="w-full flex  justify-start gap-6 mt-4">
        <span className="w-full flex items-start justify-start gap-4 ">
          <span className="w-full flex items-center justify-end">
            <p className="font-bold capitalize">IFSC</p>
          </span>
          <span className="w-full flex items-center justify-start">
            <TextField
              type="text"
              name="ifsc"
              className=" w-64 bg-white"
              inputProps={{
                style: {
                  height: "3px",
                },
              }}
            />
          </span>
        </span>
        <span className=" w-full flex items-center justify-end">
          <p className="font-bold capitalize mr-4">Status</p>
          <select name="" id="" className="w-64 h-12">
            <option value="">Active</option>
            <option value="">InActive</option>
          </select>
        </span>
      </div>

      <div className=" gap-4  mt-6 center">
        <button
          type="submit"
          className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col  "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
