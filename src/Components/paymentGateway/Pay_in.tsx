import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Pay_in() {
  const [transactionid, setTransactionid] = useState();
  const [amount, setAmount] = useState();
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [productinformation, setProductInformation] = useState("");

  return (
    <section className="main-container w-full  item-start justify-start ">
      <p className="text-[#FF0000] justify-start text-lg">INITIATE PAYMENT </p>
      <div className="main-container">
        <p className=" justify-start text-lg font-bold mt-4">
          MANDATORY PARAMETERS{" "}
        </p>
        <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Transaction ID<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="transactionid"
              placeholder="T31Q6JHB"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold ">
              Amount
              <b className="text-[#FF0000] text-sm font-semibold">
                (Should be float)*
              </b>
            </p>
            <TextField
              type="text"
              placeholder="125.25"
              name="amount"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </div>
        <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              First Name<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="firstname"
              placeholder="Easebuzz Pvt Ltd"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Email ID<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="email"
              placeholder="initiatepayment@easebuzz.in"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </div>

        <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Phone<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="phone"
              placeholder="0123456789"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Production Information<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="productinformation"
              placeholder="Apple Laptop"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </div>

        <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Sucess URL<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="sucessurl"
              placeholder="http://localhost:8080/responses"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
          <span className="w-full flex flex-col gap-6">
            <p className="font-bold capitalize">
              Failure URL<b className="text-[#FF0000] text-sm">*</b>
            </p>
            <TextField
              type="text"
              name="failureurl"
              placeholder="http://localhost:8080/responses"
              className=" w-3/4 bg-white"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </span>
        </div>
      </div>
      <div className="center mt-8 mr-4">
        <button className=" px-4 py-3 text-white bg-themeColor rounded-md">
          {""}
          SUBMIT
        </button>
      </div>
    </section>
  );
}
// .............................................................
// ............................................................

// import { TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useFormik, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import { error } from "console";
// import axios from "axios";

// export default function Pay_in() {
//   const [upload, setUpload] = useState<any>([]);

//   const initialValues = {
//     key: "SFUO1PXTNT",
//     txnid: "ipaisa1pxtnt",
//     amount: "1.2",
//     productinfo: "ipaisa",
//     firstname: "pankaj",
//     email: "pankajsspati8@gmail.com",
//     phone: "8788286618",
//     productinformation: "abc",
//     surl: "http://localhost:8080/conformation",
//     furl: "http://localhost:8080/failure",
//     // salt: "",
//     // udf1: "",
//     // udf2: "",
//     // udf3: "",
//     // udf4: "",
//     // udf5: "",
//     // name: "",
//     // account_no: "",
//   };

//   const formik = useFormik({
//     initialValues: {
//       transactionid: "",
//       amount: "",
//       firstname: "",
//       email: "",
//       phone: "",
//       productinformation: "",
//       sucessurl: "",
//       failureurl: "",
//       udf1: "",
//       udf2: "",
//       udf3: "",
//       udf4: "",
//       udf5: "",
//       address1: "",
//       address2: "",
//       city: "",
//       state: "",
//       country: "",
//       zipCode: "",
//       submerchant: "",
//       uniqueid: "",
//       splitpayment: "",
//       customerauthorization: "",
//     },
//     validationSchema: Yup.object({
//       transactionid: Yup.string().required("Transaction ID is required"),
//       amount: Yup.string().required("Amount is required"),
//       firstname: Yup.string().required("First Name is required"),
//       email: Yup.string().required("Email is required"),
//       phone: Yup.string().required("Phone number is required"),
//       productinformation: Yup.string().required(
//         "Product information is required"
//       ),
//       sucessurl: Yup.string().required("Sucess URL is required"),
//       failureurl: Yup.string().required("Failure URL is required"),
//       udf1: Yup.string(),
//       udf2: Yup.string(),
//       udf3: Yup.string(),
//       udf4: Yup.string(),
//       udf5: Yup.string(),
//       address1: Yup.string(),
//       address2: Yup.string(),
//       city: Yup.string(),
//       state: Yup.string(),
//       country: Yup.string(),
//       zipCode: Yup.string(),
//       submerchant: Yup.string(),
//       uniqueid: Yup.string(),
//       splitpayment: Yup.string(),
//       customerauthorization: Yup.string(),
//     }),
//     onSubmit: (values, { setSubmitting }) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//       }, 400);
//     },
//   });
//   useEffect(() => {
//     const initiatePayment = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8080/initiate-payment",
//           FormData
//         );
//         console.log("payment initiated", response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     initiatePayment();
//   }, [FormData]);
//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="main-container w-full  item-start justify-start "
//     >
//       <p className="text-[#FF0000] justify-start text-lg">INITIATE PAYMENT </p>
//       <div className="main-container">
//         <p className=" justify-start text-lg font-bold mt-4">
//           MANDATORY PARAMETERS{" "}
//         </p>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Transaction ID<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="transactionid"
//               placeholder="T31Q6JHB"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.transactionid}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.transactionid &&
//                 Boolean(formik.errors.transactionid)
//               }
//               helperText={
//                 formik.touched.transactionid && formik.errors.transactionid
//               }
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold ">
//               Amount
//               <b className="text-[#FF0000] text-sm font-semibold">
//                 (Should be float)*
//               </b>
//             </p>
//             <TextField
//               type="text"
//               placeholder="125.25"
//               name="amount"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.amount}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.amount && Boolean(formik.errors.amount)}
//               helperText={formik.touched.amount && formik.errors.amount}
//             />
//           </span>
//         </div>

//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               First Name<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="firstname"
//               placeholder="Easebuzz Pvt Ltd"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.firstname}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.firstname && Boolean(formik.errors.firstname)
//               }
//               helperText={formik.touched.firstname && formik.errors.firstname}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Email ID<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="email"
//               placeholder="initiatepayment@easebuzz.in"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//           </span>
//         </div>

//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Phone<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="phone"
//               placeholder="0123456789"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.phone}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.phone && Boolean(formik.errors.phone)}
//               helperText={formik.touched.phone && formik.errors.phone}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Production Information<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="productinformation"
//               placeholder="Apple Laptop"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.productinformation}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.productinformation &&
//                 Boolean(formik.errors.productinformation)
//               }
//               helperText={
//                 formik.touched.productinformation &&
//                 formik.errors.productinformation
//               }
//             />
//           </span>
//         </div>

//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Sucess URL<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="sucessurl"
//               placeholder="http://localhost:8080/responses"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.sucessurl}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.sucessurl && Boolean(formik.errors.sucessurl)
//               }
//               helperText={formik.touched.sucessurl && formik.errors.sucessurl}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">
//               Failure URL<b className="text-[#FF0000] text-sm">*</b>
//             </p>
//             <TextField
//               type="text"
//               name="failureurl"
//               placeholder="http://localhost:8080/responses"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.failureurl}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.failureurl && Boolean(formik.errors.failureurl)
//               }
//               helperText={formik.touched.failureurl && formik.errors.failureurl}
//             />
//           </span>
//         </div>
//         <p className=" justify-start text-lg mt-4 font-bold">
//           OPTIONAL PARAMETERS{" "}
//         </p>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">UDF 1</p>
//             <TextField
//               type="text"
//               name="udf1"
//               placeholder="User description 1"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.udf1}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.udf1 && Boolean(formik.errors.udf1)}
//               helperText={formik.touched.udf1 && formik.errors.udf1}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">UDF 2</p>
//             <TextField
//               type="text"
//               name="udf2"
//               placeholder="User description 2"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.udf2}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.udf2 && Boolean(formik.errors.udf2)}
//               helperText={formik.touched.udf2 && formik.errors.udf2}
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">UDF 3</p>
//             <TextField
//               type="text"
//               placeholder="User description 3"
//               name="udf3"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.udf3}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.udf3 && Boolean(formik.errors.udf3)}
//               helperText={formik.touched.udf3 && formik.errors.udf3}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">UDF 4</p>
//             <TextField
//               type="text"
//               name="udf4"
//               placeholder="User description 4"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.udf4}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.udf4 && Boolean(formik.errors.udf4)}
//               helperText={formik.touched.udf4 && formik.errors.udf4}
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">UDF 5</p>
//             <TextField
//               type="text"
//               name="udf5"
//               placeholder="User description 5"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.udf5}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.udf5 && Boolean(formik.errors.udf5)}
//               helperText={formik.touched.udf5 && formik.errors.udf5}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Address 1</p>
//             <TextField
//               type="text"
//               name="address1"
//               placeholder="250,Main 5th cross"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.address1}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address1 && Boolean(formik.errors.address1)}
//               helperText={formik.touched.address1 && formik.errors.address1}
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Address 2</p>
//             <TextField
//               type="text"
//               name="address2"
//               placeholder="Sanket nagar,Pune"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.address2}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address2 && Boolean(formik.errors.address2)}
//               helperText={formik.touched.address2 && formik.errors.address2}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">City</p>
//             <TextField
//               type="text"
//               name="city"
//               placeholder="Pune"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.city && Boolean(formik.errors.city)}
//               helperText={formik.touched.city && formik.errors.city}
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">State</p>
//             <TextField
//               type="text"
//               name="state"
//               placeholder="Maharashtra"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.state}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.state && Boolean(formik.errors.state)}
//               helperText={formik.touched.state && formik.errors.state}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Country</p>
//             <TextField
//               type="text"
//               name="country"
//               placeholder="India"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.country}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.country && Boolean(formik.errors.country)}
//               helperText={formik.touched.country && formik.errors.country}
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">ZIP-Code</p>
//             <TextField
//               type="text"
//               name="zipCode"
//               placeholder="411001"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.zipCode}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
//               helperText={formik.touched.zipCode && formik.errors.zipCode}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Sub-Merchant ID</p>
//             <TextField
//               type="text"
//               name="submerchant"
//               placeholder="12345"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.submerchant}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.submerchant && Boolean(formik.errors.submerchant)
//               }
//               helperText={
//                 formik.touched.submerchant && formik.errors.submerchant
//               }
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Unique ID</p>
//             <TextField
//               type="text"
//               name="uniqueid"
//               placeholder="Customer Unique ID"
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.uniqueid}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.uniqueid && Boolean(formik.errors.uniqueid)}
//               helperText={formik.touched.uniqueid && formik.errors.uniqueid}
//             />
//           </span>
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Split Payment</p>
//             <TextField
//               type="text"
//               name="splitpayment"
//               placeholder=""
//               className=" w-3/4 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.splitpayment}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.splitpayment &&
//                 Boolean(formik.errors.splitpayment)
//               }
//               helperText={
//                 formik.touched.splitpayment && formik.errors.splitpayment
//               }
//             />
//           </span>
//         </div>
//         <div className="w-full flex justify-between gap-6  center content-between mt-8 ">
//           <span className="w-full flex flex-col gap-6">
//             <p className="font-bold capitalize">Customer Authentication ID</p>
//             <TextField
//               type="text"
//               name="customerauthorization"
//               placeholder="Customer Authentication ID"
//               className=" w-64 bg-white"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//               value={formik.values.customerauthorization}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.customerauthorization &&
//                 Boolean(formik.errors.customerauthorization)
//               }
//               helperText={
//                 formik.touched.customerauthorization &&
//                 formik.errors.customerauthorization
//               }
//             />
//           </span>
//         </div>
//         <div className="center mt-8 mr-4">
//           <button className=" px-4 py-3 text-white bg-themeColor rounded-md">
//             {""}
//             SUBMIT
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
