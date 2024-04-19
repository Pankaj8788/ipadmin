import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { error } from "console";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";

export default function Initiatepayment() {
  const [formData, setFormData] = useState<any>();

  const initialValues = {
    key: "SFUO1PXTNT",
    txnid: "ipaisa1pxtnt",
    amount: "",
    productinfo: "ipaisa",
    firstname: "",
    email: "pankajsspati8@gmail.com",
    surl: "http://localhost:3000/conformation",
    furl: "http://localhost:3000/failure",
    salt: "8L8Q47OKS8",
    udf1: "",
    udf2: "",
    udf3: "",
    udf4: "",
    udf5: "",
    name: "",
    account_no: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      amount: Yup.string().required("Amount is required"),
      account_no: Yup.string(),
      key: Yup.string(),
      txnid: Yup.string(),
      productinfo: Yup.string(),
      firstname: Yup.string(),
      email: Yup.string(),
      surl: Yup.string(),
      furl: Yup.string(),
      salt: Yup.string(),
      udf1: Yup.string(),
      udf2: Yup.string(),
      udf3: Yup.string(),
      udf4: Yup.string(),
      udf5: Yup.string(),
    }),
    onSubmit: (values, prop) => {
      try {
        setFormData(values);
      } catch (error) {
        console.log(error);
      } finally {
        prop.resetForm();
      }
    },
  });

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/payment/initiate",
          formData
        );
        console.log("payment initiated", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    initiatePayment();
  }, [formData]);

  return (
    <MainLayout>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col main-container "
      >
        <div className="w-full flex flex-col justify start gap 4 mt-6">
          <p className="font-bold text-md capitalize ">Name</p>
          <TextField
            type="text"
            name="name"
            placeholder=""
            className="w-64 bg-white mt-2"
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
        <div className="w-full flex flex-col justify start gap 4 mt-6">
          <p className="font-bold text-md capitalize ">Amount</p>
          <TextField
            type="text"
            name="amount"
            placeholder=""
            className="w-64 bg-white mt-2"
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
        <div className="w-full flex flex-col justify start gap 4 mt-6">
          <p className="font-bold text-md capitalize ">Bank A/C Number</p>
          <TextField
            type="text"
            name="account_no"
            placeholder=""
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={formik.values.account_no}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.account_no && Boolean(formik.errors.account_no)
            }
            helperText={formik.touched.account_no && formik.errors.account_no}
          />
        </div>

        <div className="mt-6 gap-4">
          <button
            type="submit"
            className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
          >
            {" "}
            Pay Now
          </button>
        </div>
      </form>
    </MainLayout>
  );
}

//new// import React, { useEffect, useState } from "react";
// import { TextField } from "@mui/material";
// import { useFormik, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import { error } from "console";
// import axios from "axios";
// import MainLayout from "../layouts/MainLayout";
// import { useParams } from 'react-router-dom';
// import {cashfree} from "../Components/cshfree/utils"
// import { useRouter } from "next/router";
// import Head from "next/head";
// export default function Initiatepayment() {
//   const params = useParams()
//   const isSessionId = params.sessionid
//   const [customer_email, setCustomer_email] = useState('')
//   const [customer_phone, setCustomer_phone] = useState('')
//   const [customer_name, setCustomer_name] = useState('')
//   const [order_amount, setOrder_amount] = useState()
//   const [order_note, setOrder_note] = useState("")
//   const [sessionId, setSessionId] = useState<any>();
//   const [order_id, setOrder_id] = useState('ORIDipaisa' + Date.now())
//   // const version = cashfree.version<any>();
//   const {asPath,push, query}=useRouter()
//    console.log(sessionId)
// console.log(order_id)
//   const handleNewSessionId=async()=>{
//     try{
//       const result = await axios.post("http://localhost:8080/api/payment",
//       {
//         customer_details: {
//           customer_id: 'ipaisa' + Date.now(),
//           customer_email: customer_email,
//           customer_phone: customer_phone,
//           customer_name: customer_name
//         },
//         order_meta: {
//           notify_url: "https://webhook.site/d057a7d4-c09a-405c-b44b-3067a1559a07",
//           payment_methods: 'cc,dc,upi'
//         },
//         order_amount: order_amount,
//         order_id: order_id,
//         order_currency: 'INR',
//         order_note: order_note,
//         version: cashfree.version
//       }
//       )
//       // console.log(result)
//       if(result?.data?.info?.payment_session_id){
//         push(`${asPath}?payment_session_id=${result?.data?.info?.payment_session_id}&order_id=${result?.data?.info?.order_id}`)
//       }
//     }catch(err){
//       console.log(err)
//     }
//   }
// const paynow=()=>{
//   let checkoutOptions = {
//     paymentSessionId: sessionId,
//     returnUrl: `http://localhost:3000` ,
// }
// console.log(checkoutOptions)
// cashfree.checkout(checkoutOptions).then(function(result:any){
//     if(result.error){
//         alert(result.error.message);
//     }
//     if(result.redirect){
//         console.log("Redirection")
//         console.log(result);
//     }
// });
// }
// useEffect(()=>{
//   return setSessionId(query.payment_session_id);
// }, [handleNewSessionId])
//   return (
//     <MainLayout>
//       <section className="w-full main-container flex flex-col py-12 items-start justify-start gap-6">
//         <TextField
//         type="text"
//         name="customer_name"
//         value={customer_name}
//         placeholder="enter customer name"
//         onChange={(e:any)=>{setCustomer_name(e.target.value)}}
//         />
//         <TextField
//         type="email"
//         name="customer_email"
//         value={customer_email}
//         placeholder="enter customer email"
//         onChange={(e:any)=>{setCustomer_email(e.target.value)}}
//         />
//         <TextField
//         type="text"
//         name="customer_phone"
//         value={customer_phone}
//         placeholder="enter customer phone number"
//         onChange={(e:any)=>{setCustomer_phone(e.target.value)}}
//         />
//         <TextField
//         type="number"
//         name="order_amount"
//         value={order_amount}
//         placeholder="enter amount"
//         onChange={(e:any)=>{setOrder_amount(e.target.value)}}
//         />
//         <TextField
//         type="text"
//         name="order_note"
//         value={order_note}
//         placeholder="enter your order note"
//         onChange={(e:any)=>{setOrder_note(e.target.value)}}
//         />
//         <span className="flex items-center justify-start gap-2">
//           <TextField
//           type="text"
//           name="sessionId"
//           placeholder="enter session id"
//           value={query.payment_session_id}
//           // onChange={(e)=>{setSessionId(e.target.value)}}
//           disabled
//           />
//           <button className="px-4 py-3 bg-blue-600 text-white font-bold capitalize rounded-md" type="button" onClick={handleNewSessionId}> get sessionId</button>
//           <button className="px-4 py-3 bg-blue-600 text-white font-bold capitalize rounded-md" type="button" onClick={paynow}> pay now</button>
//         </span>
//       </section>
//     </MainLayout>
//   );
// }
