// // import React, { useState } from "react";
// // import axios from "axios";
// // import { TextField } from "@mui/material";
// // import MainLayout from "../layouts/MainLayout";

// // const PaymentForm = () => {
// //   const [paymentData, setPaymentData] = useState({
// //     txnid: "IPAISA" + new Date().getTime(),
// //     amount: "",
// //     productinfo: "iPaisa",
// //     firstname: "Edsom",
// //     phone: "8788286618",
// //     email: "edsomfintech@gmail.com",
// //     surl: "https://edsomfintech.com",
// //     furl: "https://edsomfintech.com",
// //   });

// //   const handleChange = (e: any) => {
// //     const { name, value } = e.target;
// //     setPaymentData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const initiatePayment = async () => {
// //     try {
// //       const response = await axios.post(
// //         "https://ipaisa.site/initiate-payment",
// //         paymentData
// //       );
// //       console.log(response.data); // Response from backend
// //       if (response.data.status === 1) {
// //         // Access key received, use it as needed
// //         const accessKey = response.data.data;
// //         // Implement this function to use the access key
// //         openPaymentGateway(accessKey);
// //       } else {
// //         console.error("Access key not received from backend");
// //       }
// //     } catch (error) {
// //       console.error("Error initiating payment:");
// //       // Handle error
// //     }
// //   };

// //   const openPaymentGateway = (accessKey: any) => {
// //     console.log("Opening payment gateway with access key:", accessKey);
// //     // For example:
// //     window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
// //   };

// //   return (
// //     <MainLayout>
// //       <div className="main-container w-full justify-start items-start ">
// //         <h1 className="text-2xl center text-[#FF0000] font-bold">
// //           Payment Form
// //         </h1>
// //         <form
// //           onSubmit={(e) => {
// //             e.preventDefault();
// //             initiatePayment();
// //           }}
// //         >
// //           <TextField
// //             type="text"
// //             name="txnid"
// //             placeholder="Transaction ID"
// //             value={paymentData.txnid}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-4 rounded-sm"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="amount"
// //             placeholder="Amount"
// //             value={paymentData.amount}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="productinfo"
// //             placeholder="Product Info"
// //             value={paymentData.productinfo}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="firstname"
// //             placeholder="First Name"
// //             value={paymentData.firstname}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="phone"
// //             placeholder="Phone"
// //             value={paymentData.phone}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={paymentData.email}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="surl"
// //             placeholder="Success URL"
// //             value={paymentData.surl}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <TextField
// //             type="text"
// //             name="furl"
// //             placeholder="Failure URL"
// //             value={paymentData.furl}
// //             onChange={handleChange}
// //             className="w-64 bg-white mt-2"
// //             inputProps={{
// //               style: {
// //                 height: "5px",
// //               },
// //             }}
// //             required
// //           />
// //           <br />
// //           <button
// //             type="submit"
// //             className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
// //           >
// //             Initiate Payment
// //           </button>
// //         </form>
// //       </div>
// //     </MainLayout>
// //   );
// // };

// // export default PaymentForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField } from "@mui/material";
// import MainLayout from "../layouts/MainLayout";

// const PaymentForm = () => {
//   const [paymentData, setPaymentData] = useState({
//     txnid: "IPAISA" + new Date().getTime(),
//     amount: "",
//     productinfo: "iPaisa",
//     firstname: "Edsom",
//     phone: "8788286618",
//     email: "edsomfintech@gmail.com",
//     surl: "http://localhost:3000",
//     furl: "https://www.youtube.com/",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setPaymentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const initiatePayment = async () => {
//     try {
//       const response = await axios.post(
//         // "https://ipaisa.site/initiate-payment",
//         "https://ipaisa.site/initiate-web-payment",
//         paymentData
//       );
//       console.log("Response:", response.data);
//       // console.log(response.data.data);
//       // const accessKey = response.data.data;
//       // // console.log(response.data.data); // Response from backend
//       // if (response.data.status === 1) {
//       //   // Access key received, use it as needed
//       //   const accessKey = response.data.data;
//       //   // Implement this function to use the access key
//       //   openPaymentGateway(accessKey);
//       // } else {
//       //   console.error("Access key not received from backend");
//       // }
//     } catch (error) {
//       console.error("Error initiating payment:");
//       // Handle error
//     }
//   };

//   // const openPaymentGateway = async (accessKey: any) => {
//   //   console.log("Opening payment gateway with access key:", accessKey);
//   //   // For example:
//   //   window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
//   // };
//   // const openPaymentGateway = async (accessKey: any) => {
//   //   try {
//   //     console.log("Opening payment gateway with access key:", accessKey);
//   //     const response = await fetch("https://pay.easebuzz.in/pay", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ accessKey }),
//   //     });
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }
//   //     const responseData = await response.json();
//   //     console.log("Payment gateway response:", responseData);
//   //     // Handle the response as needed
//   //   } catch (error) {
//   //     console.error("Error opening payment gateway:", error);
//   //     // Handle error
//   //   }
//   // };
//   return (
//     <MainLayout>
//       <div className="main-container w-full justify-start items-start ">
//         <h1 className="text-2xl center text-[#FF0000] font-bold">
//           Payment Form
//         </h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             initiatePayment();
//           }}
//         >
//           <TextField
//             type="text"
//             name="txnid"
//             placeholder="Transaction ID"
//             value={paymentData.txnid}
//             onChange={handleChange}
//             className="w-64 bg-white mt-4 rounded-sm"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="amount"
//             placeholder="Amount"
//             value={paymentData.amount}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="productinfo"
//             placeholder="Product Info"
//             value={paymentData.productinfo}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             value={paymentData.firstname}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={paymentData.phone}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={paymentData.email}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="surl"
//             placeholder="Success URL"
//             value={paymentData.surl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="furl"
//             placeholder="Failure URL"
//             value={paymentData.furl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <button
//             type="submit"
//             className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
//           >
//             Initiate Payment
//           </button>
//         </form>
//       </div>
//     </MainLayout>
//   );
// };

// export default PaymentForm;

//.......................
// import React, { useState } from "react";
// import axios from "axios";
// import { TextField } from "@mui/material";
// import MainLayout from "../layouts/MainLayout";

// const PaymentForm = () => {
//   const [paymentData, setPaymentData] = useState({
//     txnid: "IPAISA" + new Date().getTime(),
//     amount: "",
//     productinfo: "iPaisa",
//     firstname: "Edsom",
//     phone: "8788286618",
//     email: "edsomfintech@gmail.com",
//     surl: "https://edsomfintech.com",
//     furl: "https://edsomfintech.com",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setPaymentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const initiatePayment = async () => {
//     try {
//       const response = await axios.post(
//         "https://ipaisa.site/initiate-payment",
//         paymentData
//       );
//       console.log(response.data); // Response from backend
//       if (response.data.status === 1) {
//         // Access key received, use it as needed
//         const accessKey = response.data.data;
//         // Implement this function to use the access key
//         openPaymentGateway(accessKey);
//       } else {
//         console.error("Access key not received from backend");
//       }
//     } catch (error) {
//       console.error("Error initiating payment:");
//       // Handle error
//     }
//   };

//   const openPaymentGateway = (accessKey: any) => {
//     console.log("Opening payment gateway with access key:", accessKey);
//     // For example:
//     window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
//   };

//   return (
//     <MainLayout>
//       <div className="main-container w-full justify-start items-start ">
//         <h1 className="text-2xl center text-[#FF0000] font-bold">
//           Payment Form
//         </h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             initiatePayment();
//           }}
//         >
//           <TextField
//             type="text"
//             name="txnid"
//             placeholder="Transaction ID"
//             value={paymentData.txnid}
//             onChange={handleChange}
//             className="w-64 bg-white mt-4 rounded-sm"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="amount"
//             placeholder="Amount"
//             value={paymentData.amount}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="productinfo"
//             placeholder="Product Info"
//             value={paymentData.productinfo}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             value={paymentData.firstname}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={paymentData.phone}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={paymentData.email}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="surl"
//             placeholder="Success URL"
//             value={paymentData.surl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="furl"
//             placeholder="Failure URL"
//             value={paymentData.furl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <button
//             type="submit"
//             className="px-4 py-3 text-sm rounded-lg text-white font-bold bg-themeColor mb-10 mt-4 flex flex-col "
//           >
//             Initiate Payment
//           </button>
//         </form>
//       </div>
//     </MainLayout>
//   );
// };

// export default PaymentForm;

//....................
// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, FormControl, Select, MenuItem } from "@mui/material";
// import MainLayout from "../layouts/MainLayout";

// export default function CombinedPaymentForm() {
//   const [paymentData, setPaymentData] = useState({
//     txnid: "Rockkpay" + new Date().getTime(),
//     amount: "",
//     productinfo: "iPaisa",
//     firstname: "Edsom",
//     phone: "8788286618",
//     email: "edsomfintech@gmail.com",
//     surl: "https://edsomfintech.com",
//     furl: "https://edsomfintech.com",
//   });

//   const [mode, setMode] = useState("percentage");
//   const [percentage, setPercentage] = useState("");
//   const [amountNumber, setAmountNumber] = useState("");
//   const [calculatedAmount, setCalculatedAmount] = useState(0);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setPaymentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleModeChange = (event: any) => {
//     setMode(event.target.value);
//     setCalculatedAmount(0);
//   };

//   const handleAmountChange = (event: any) => {
//     const newValue = parseFloat(event.target.value);
//     setPaymentData((prevState) => ({
//       ...prevState,
//       amount: newValue.toString(),
//     }));
//     if (mode === "percentage") {
//       const percentageAmount = (newValue * parseFloat(percentage)) / 100;
//       setCalculatedAmount(newValue + percentageAmount);
//     } else {
//       setCalculatedAmount(newValue + parseFloat(amountNumber));
//     }
//   };

//   const handlePercentageChange = (event: any) => {
//     setPercentage(event.target.value);
//     if (mode === "percentage") {
//       const percentageAmount =
//         (parseFloat(paymentData.amount) * parseFloat(event.target.value)) / 100;
//       setCalculatedAmount(parseFloat(paymentData.amount) + percentageAmount);
//     }
//   };

//   const handleAmountNumberChange = (event: any) => {
//     setAmountNumber(event.target.value);
//     if (mode === "number") {
//       setCalculatedAmount(
//         parseFloat(paymentData.amount) + parseFloat(event.target.value)
//       );
//     }
//   };

//   const initiatePayment = async () => {
//     try {
//       const response = await axios.post(
//         "https://ipaisa.site/initiate-payment",
//         paymentData
//       );
//       console.log(response.data); // Response from backend
//       if (response.data.status === 1) {
//         // Access key received, use it as needed
//         const accessKey = response.data.data;
//         // Implement this function to use the access key
//         openPaymentGateway(accessKey);
//       } else {
//         console.error("Access key not received from backend");
//       }
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//       // Handle error
//     }
//   };

//   const openPaymentGateway = (accessKey: any) => {
//     console.log("Opening payment gateway with access key:", accessKey);
//     // For example:
//     window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
//   };

//   return (
//     <MainLayout>
//       <div className="main-container w-full justify-start items-start ">
//         <h1 className="text-2xl center text-[#FF0000] font-bold">
//           Payment Form
//         </h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             initiatePayment();
//           }}
//         >
//           <TextField
//             type="text"
//             name="txnid"
//             placeholder="Transaction ID"
//             value={paymentData.txnid}
//             onChange={handleChange}
//             className="w-64 bg-white mt-4 rounded-sm"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             value={paymentData.amount}
//             onChange={handleAmountChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="productinfo"
//             placeholder="Product Info"
//             value={paymentData.productinfo}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             value={paymentData.firstname}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={paymentData.phone}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={paymentData.email}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="surl"
//             placeholder="Success URL"
//             value={paymentData.surl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <TextField
//             type="text"
//             name="furl"
//             placeholder="Failure URL"
//             value={paymentData.furl}
//             onChange={handleChange}
//             className="w-64 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             required
//           />
//           <br />
//           <div className="flex flex-col">
//             <FormControl className="w-72 bg-white mt-2">
//               <Select
//                 labelId="mode-select-label"
//                 id="mode-select"
//                 value={mode}
//                 onChange={handleModeChange}
//               >
//                 <MenuItem value="percentage">Percentage</MenuItem>
//                 <MenuItem value="number">Rupees</MenuItem>
//               </Select>
//             </FormControl>
//             {mode === "percentage" && (
//               <TextField
//                 type="number"
//                 placeholder="Enter Percentage"
//                 className="w-72 bg-white mt-2"
//                 inputProps={{
//                   style: {
//                     height: "3px",
//                   },
//                 }}
//                 value={percentage}
//                 onChange={handlePercentageChange}
//               />
//             )}
//             {mode === "number" && (
//               <TextField
//                 type="number"
//                 placeholder="Enter Amount"
//                 className="w-72 bg-white mt-2"
//                 inputProps={{
//                   style: {
//                     height: "5px",
//                   },
//                 }}
//                 value={amountNumber}
//                 onChange={handleAmountNumberChange}
//               />
//             )}
//           </div>
//           <br />
//           <TextField
//             type="text"
//             placeholder="Calculated Amount"
//             className="w-72 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             onChange={handleAmountChange}
//             value={calculatedAmount}
//             disabled
//           />
//           <br />
//           <button
//             type="submit"
//             className="bg-[#FF0000] mt-4 py-2 px-6 rounded-md text-white"
//           >
//             Pay Now
//           </button>
//         </form>
//       </div>
//     </MainLayout>
//   );
// }

//..................
import React, { useState } from "react";
import axios from "axios";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function CombinedPaymentForm() {
  const [paymentData, setPaymentData] = useState({
    txnid: "ROCKKPAY" + new Date().getTime(),
    amount: "",
    productinfo: "ROCKKPAY",
    firstname: "Edsom",
    phone: "8788286618",
    email: "edsomfintech@gmail.com",
    surl: "https://edsomfintech.com",
    furl: "https://edsomfintech.com",
  });

  const [mode, setMode] = useState("percentage");
  const [percentage, setPercentage] = useState("");
  const [amountNumber, setAmountNumber] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModeChange = (event: any) => {
    setMode(event.target.value);
    setCalculatedAmount(0);
  };

  const handleAmountChange = (event: any) => {
    const newValue = parseFloat(event.target.value);
    setPaymentData((prevState) => ({
      ...prevState,
      amount: newValue.toString(),
    }));
    if (mode === "percentage") {
      const percentageAmount = (newValue * parseFloat(percentage)) / 100;
      setCalculatedAmount(newValue + percentageAmount);
    } else {
      setCalculatedAmount(newValue + parseFloat(amountNumber));
    }
  };

  const handlePercentageChange = (event: any) => {
    setPercentage(event.target.value);
    if (mode === "percentage") {
      const percentageAmount =
        (parseFloat(paymentData.amount) * parseFloat(event.target.value)) / 100;
      setCalculatedAmount(parseFloat(paymentData.amount) + percentageAmount);
    }
  };

  const handleAmountNumberChange = (event: any) => {
    setAmountNumber(event.target.value);
    if (mode === "number") {
      setCalculatedAmount(
        parseFloat(paymentData.amount) + parseFloat(event.target.value)
      );
    }
  };

  const initiatePayment = async () => {
    try {
      const response = await axios.post(
        "https://api.ipaisa.site/initiate-payment",
        { ...paymentData, amount: calculatedAmount.toString() } // Use calculatedAmount here
      );
      console.log(response.data); // Response from backend
      if (response.data.status === 1) {
        // Access key received, use it as needed
        const accessKey = response.data.data;
        // Implement this function to use the access key
        openPaymentGateway(accessKey);
      } else {
        console.error("Access key not received from backend");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      // Handle error
    }
  };

  const openPaymentGateway = (accessKey: any) => {
    console.log("Opening payment gateway with access key:", accessKey);
    // For example:
    window.open(`https://pay.easebuzz.in/pay/${accessKey}`, "_blank");
  };

  return (
    <MainLayout>
      <div className="main-container w-full justify-start items-start ">
        <h1 className="text-2xl center text-[#FF0000] font-bold">
          Payment Form
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            initiatePayment();
          }}
        >
          <TextField
            type="text"
            name="txnid"
            placeholder="Transaction ID"
            value={paymentData.txnid}
            onChange={handleChange}
            className="w-64 bg-white mt-4 rounded-sm"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="number"
            name="amount"
            placeholder="Amount"
            value={paymentData.amount}
            onChange={handleAmountChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="text"
            name="productinfo"
            placeholder="Product Info"
            value={paymentData.productinfo}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="text"
            name="firstname"
            placeholder="First Name"
            value={paymentData.firstname}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="text"
            name="phone"
            placeholder="Phone"
            value={paymentData.phone}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            value={paymentData.email}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="text"
            name="surl"
            placeholder="Success URL"
            value={paymentData.surl}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <TextField
            type="text"
            name="furl"
            placeholder="Failure URL"
            value={paymentData.furl}
            onChange={handleChange}
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            required
          />
          <br />
          <div className="flex flex-col">
            <FormControl className="w-64 h-10 bg-white mt-2">
              <Select
                labelId="mode-select-label"
                id="mode-select"
                value={mode}
                onChange={handleModeChange}
              >
                <MenuItem value="percentage">Percentage</MenuItem>
                <MenuItem value="number">Rupees</MenuItem>
              </Select>
            </FormControl>
            {mode === "percentage" && (
              <TextField
                type="number"
                placeholder="Enter Percentage"
                className="w-64 bg-white mt-2"
                inputProps={{
                  style: {
                    height: "3px",
                  },
                }}
                value={percentage}
                onChange={handlePercentageChange}
              />
            )}
            {mode === "number" && (
              <TextField
                type="number"
                placeholder="Enter Amount"
                className="w-72 bg-white mt-2"
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
                value={amountNumber}
                onChange={handleAmountNumberChange}
              />
            )}
          </div>
          <br />
          <TextField
            type="text"
            placeholder="Calculated Amount"
            className="w-64 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={calculatedAmount} // Display calculatedAmount here
            disabled
          />
          <br />
          <button
            type="submit"
            className="bg-[#FF0000] mt-4 py-2 px-6 rounded-md text-white"
          >
            Pay Now
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
