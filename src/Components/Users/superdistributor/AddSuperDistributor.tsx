// import React, { useEffect, useState } from "react";
// import { TextField } from "@mui/material";
// import { useFormik, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import { error } from "console";
// import Swal from "sweetalert2";

// export default function AddSuperDistributor() {
//   const [upload, setUpload] = useState<any>([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(upload),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [upload]);

//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     user_type: "",
//     category: "",
//     main_min_balance: "",
//     middle_name: "",
//     low_balance_alert_limit: "",
//     last_name: "",
//     pin_code: "",
//     outlet_name: "",
//     district: "",
//     aadharcard_number: "",
//     state: "",
//     gstin: "",
//     city: "",
//     date_of_birth: "",
//     alternate_number: "",
//     remark: "",
//     pancard_number: "",
//     bank_account_number: "",
//     voter_id_number: "",
//     ifsc: "",
//     aeps_unsettled_fund: "",
//     address: "",
//     mobile_number: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .required("Name is required")
//         .min(2, "Enter valid name"),
//       middle_name: Yup.string().required("Middle name is required"),
//       password: Yup.string().required("password is required"),
//       last_name: Yup.string().required("Last name is required"),
//       pin_code: Yup.string().required("Pin code is required"),
//       outlet_name: Yup.string().required("Outlet name is required"),
//       district: Yup.string().required("District is required"),
//       aadharcard_number: Yup.string().required("Aadharcard number is required"),
//       state: Yup.string().required("State is required"),
//       gstin: Yup.string().required("Gstin is required"),
//       city: Yup.string().required("City is required"),
//       date_of_birth: Yup.string().required("Date of birth is required"),
//       alternate_number: Yup.string().required("Alternate number is required"),
//       pancard_number: Yup.string().required("Pancard number is required"),
//       bank_account_number: Yup.string().required(
//         "Bank account number is required"
//       ),
//       ifsc: Yup.string().required("Ifsc is required"),

//       email: Yup.string()
//         .required("Email is required")
//         .email("Enter valid email"),
//       address: Yup.string().required("Address is required"),
//       mobile_number: Yup.string().required("Mobile number is required"),
//     }),

//     onSubmit: (values, prop) => {
//       try {
//         setUpload(values);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         prop.resetForm();
//       }
//     },
//   });

//   return (
//     <form className="main-container w-full ">
//       <div className="w-full center ">
//         <p className="font-semibold capitalize text-lg ">
//           New Registered Super Distributor
//         </p>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-8">
//         <span className="w-full flex  items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize"> Name</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="name"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//             />
//           </span>
//         </span>

//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Email</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="email"
//               className=" w-64 bg-white "
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//           </span>
//         </span>
//       </div>
//       {/* <div className="w-full flex  justify-between gap-6 mt-8">
//         <span className="w-full flex  items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize"> Password</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="password"
//               name="password"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               // value={formik.values.password}
//               // onChange={formik.handleChange}
//               // onBlur={formik.handleBlur}
//               // error={formik.touched.password && Boolean(formik.errors.password)}
//               // helperText={formik.touched.password && formik.errors.password}
//             />
//           </span>
//           <span>
//             <span className="w-full flex items-center justify-end">
//               <div></div>
//             </span>
//           </span>
//         </span>
//       </div> */}

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Password</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="password"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           {/* <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Mobile Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="number"
//               name="mobile_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.mobile_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.mobile_number &&
//                 Boolean(formik.errors.mobile_number)
//               }
//               helperText={
//                 formik.touched.mobile_number && formik.errors.mobile_number
//               }
//             />
//           </span> */}
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Middle Name</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="middle_name"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.middle_name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.middle_name && Boolean(formik.errors.middle_name)
//               }
//               helperText={
//                 formik.touched.middle_name && formik.errors.middle_name
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Mobile Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="number"
//               name="mobile_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.mobile_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.mobile_number &&
//                 Boolean(formik.errors.mobile_number)
//               }
//               helperText={
//                 formik.touched.mobile_number && formik.errors.mobile_number
//               }
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Last Name</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="last_name"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.last_name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.last_name && Boolean(formik.errors.last_name)
//               }
//               helperText={formik.touched.last_name && formik.errors.last_name}
//             />
//           </span>
//         </span>

//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Alternate Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="alternate_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.alternate_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.alternate_number &&
//                 Boolean(formik.errors.alternate_number)
//               }
//               helperText={
//                 formik.touched.alternate_number &&
//                 formik.errors.alternate_number
//               }
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Outlet Name</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="outlet_name"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.outlet_name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.outlet_name && Boolean(formik.errors.outlet_name)
//               }
//               helperText={
//                 formik.touched.outlet_name && formik.errors.outlet_name
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">States</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="state"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.state}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.state && Boolean(formik.errors.state)}
//               helperText={formik.touched.state && formik.errors.state}
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Adhar Card Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="aadharcard_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.aadharcard_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.aadharcard_number &&
//                 Boolean(formik.errors.aadharcard_number)
//               }
//               helperText={
//                 formik.touched.aadharcard_number &&
//                 formik.errors.aadharcard_number
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">District</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="district"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.district}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.district && Boolean(formik.errors.district)}
//               helperText={formik.touched.district && formik.errors.district}
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">GSTIN</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="gstin"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.gstin}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.gstin && Boolean(formik.errors.gstin)}
//               helperText={formik.touched.gstin && formik.errors.gstin}
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">City</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="city"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.city && Boolean(formik.errors.city)}
//               helperText={formik.touched.city && formik.errors.city}
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Date Of Birth</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="date"
//               name="date_of_birth"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.date_of_birth}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.date_of_birth &&
//                 Boolean(formik.errors.date_of_birth)
//               }
//               helperText={
//                 formik.touched.date_of_birth && formik.errors.date_of_birth
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Pin code</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="pin_code"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.pin_code}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.pin_code && Boolean(formik.errors.pin_code)}
//               helperText={formik.touched.pin_code && formik.errors.pin_code}
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Pancard Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="pancard_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.pancard_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.pancard_number &&
//                 Boolean(formik.errors.pancard_number)
//               }
//               helperText={
//                 formik.touched.pancard_number && formik.errors.pancard_number
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full"></span>
//       </div>

//       <div className="w-full flex  justify-between gap-6 mt-4">
//         <span className="w-full flex items-center justify-between gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">Bank A/C Number</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               type="text"
//               name="bank_account_number"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.bank_account_number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.bank_account_number &&
//                 Boolean(formik.errors.bank_account_number)
//               }
//               helperText={
//                 formik.touched.bank_account_number &&
//                 formik.errors.bank_account_number
//               }
//             />
//           </span>
//         </span>
//         <span className="w-full  flex  gap-4 justify-between items-center">
//           <span className="w-full flex items-center justify-end">
//             <p className="capitalize font-bold ">Address</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <TextField
//               multiline
//               rows={2}
//               type="text"
//               name="address"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "3px",
//                 },
//               }}
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address && Boolean(formik.errors.address)}
//               helperText={formik.touched.address && formik.errors.address}
//             />
//           </span>
//         </span>
//       </div>

//       <div className="w-full flex  justify-start gap-6 mt-4">
//         <span className="w-full flex items-start justify-start gap-4 ">
//           <span className="w-full flex items-center justify-end">
//             <p className="font-bold capitalize">user_type</p>
//           </span>
//           <span className="w-full flex items-center justify-start">
//             <select name="" id="" className="w-64 h-12">
//               <option value="">User Type</option>
//               <option value="">Master Distributor</option>
//               <option value="">Distributor</option>
//               <option value="">Retailer</option>
//             </select>
//           </span>
//         </span>
//         <span className=" w-full flex items-center justify-end">
//           <p className="font-bold capitalize mr-4">Category</p>
//           <select name="" id="" className="w-64 h-12">
//             <option value="">Fixed</option>
//             <option value="">Variable</option>
//           </select>
//         </span>
//       </div>

//       <div className=" gap-4  mt-6 center">
//         <button
//           type="submit"
//           className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col  "
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function AddSuperDistributor() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    user_Type: "",
    category: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    outletName: "",
    aadharcardNumber: "",
    gstin: "",
    dateOfBirth: "",
    bankAccountNumber: "",
    ifsc: "",
    address: "",
    pincode: "",
    district: "",
    state: "",
    city: "",
    alternateNumber: "",
    pancardNumber: "",
  });

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      console.log("User created successfully!");

      setUserData({
        name: "",
        email: "",
        password: "",
        user_Type: "",
        category: "",
        middleName: "",
        lastName: "",
        mobileNumber: "",
        outletName: "",
        aadharcardNumber: "",
        gstin: "",
        dateOfBirth: "",
        bankAccountNumber: "",
        ifsc: "",
        address: "",
        pincode: "",
        district: "",
        state: "",
        city: "",
        alternateNumber: "",
        pancardNumber: "",
      });
      Swal.fire({
        icon: "success",
        title: "User Created Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Handle success, such as showing a success message or redirecting the user
    } catch (error: any) {
      console.error("Error creating user:", error.response.data.message);
      // Handle error, such as displaying an error message to the user
    }
  };
  return (
    <div className="gap-4 main-container  bg-white ">
      <p className="font-bold text-lg">Create New User</p>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-4 w-full">
          <span className="">
            <div className="mt-2 flex flex-col ">
              <p className="font-medium text-md mb-2">Name:</p>
              <input
                type="text"
                name="name"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Middle Name:</p>
              <input
                type="text"
                name="middleName"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Last Name:</p>
              <input
                type="text"
                name="lastName"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Date Of Birth:</p>
              <input
                type="Date"
                name="dateOfBirth"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Email:</p>
              <input
                type="email"
                name="email"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Password:</p>
              <input
                type="password"
                name="password"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">User Type:</p>

              <select
                name="user_Type"
                value={userData.user_Type}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              >
                <option value="">Select User Type</option>
                <option value="Super_Distributor">Super Distributor</option>
              </select>
            </div>
          </span>
          <span className="ml-8">
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Category:</p>
              <select
                name="category"
                value={userData.category}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              >
                <option value="">Select Category</option>
                <option value="Fixed">Fixed</option>
                <option value="Variable">Variable</option>
              </select>
            </div>

            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Mobile Number:</p>
              <input
                type="number"
                name="mobileNumber"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Alternate Number:</p>
              <input
                type="number"
                name="alternateNumber"
                value={userData.alternateNumber}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Outlet Name:</p>
              <input
                type="text"
                name="outletName"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.outletName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Aadharcard Number:</p>
              <input
                type="number"
                name="aadharcardNumber"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.aadharcardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Gstin:</p>
              <input
                type="text"
                name="gstin"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.gstin}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Bank Account Number:</p>
              <input
                type="number"
                name="bankAccountNumber"
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
                value={userData.bankAccountNumber}
                onChange={handleChange}
              />
            </div>
          </span>
          <span className="ml-8">
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">IfSC:</p>
              <input
                type="text"
                name="ifsc"
                value={userData.ifsc}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Address:</p>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Pincode:</p>
              <input
                type="number"
                name="pincode"
                value={userData.pincode}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">District:</p>
              <input
                type="text"
                name="district"
                value={userData.district}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">State:</p>
              <input
                type="text"
                name="state"
                value={userData.state}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">City:</p>
              <input
                type="text"
                name="city"
                value={userData.city}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>

            <div className="mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">PancardNumber:</p>
              <input
                type="number"
                name="pancardNumber"
                value={userData.pancardNumber}
                onChange={handleChange}
                className=" h-10 w-full bg-white rounded-md  border-2 border-gray-400"
              />
            </div>
          </span>
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-themeColor rounded-md text-white center mt-8"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
export default AddSuperDistributor;
