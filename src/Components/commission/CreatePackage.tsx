// import { TextField } from "@mui/material";
// import React, { useState } from "react";
// import { useFormik, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import { error } from "console";

// export default function CreatePackage() {
//   const [upload, setUpload] = useState<any>([]);

//   const formik = useFormik({
//     initialValues: {
//       createPackage: "",
//       globalSetting: "",
//     },
//     validationSchema: Yup.object({
//       createPackage: Yup.string().required("Package is required"),
//       globalSetting: Yup.string().required("Price is required"),
//     }),
//     onSubmit: (values, { setSubmitting }) => {
//       setSubmitting(false);
//     },
//   });
//   return (
//     <form className="w-full main-container flex flex-col items-start justify-start my-8 gap-2">
//       <div className="w-full ">
//         <p className="text-lg tracking-wider capitalize pb-2">
//           create a new package
//         </p>
//         <TextField
//           type="text"
//           name="createPackage"
//           className="w-72 bg-white"
//           placeholder="Name"
//           inputProps={{
//             style: {
//               height: "3px",
//             },
//           }}
//           value={formik.values.createPackage}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={
//             formik.touched.createPackage && Boolean(formik.errors.createPackage)
//           }
//           helperText={
//             formik.touched.createPackage && formik.errors.createPackage
//           }
//         />
//       </div>
//       <span className="w-full h-[.5px] bg-black"></span>
//       <div className="w-full mt-2">
//         <p className="text-lg tracking-wider capitalize pb-2">
//           global setting info
//         </p>
//         <span className="flex items-center justify-start gap-8">
//           <TextField
//             type="text"
//             name="globalSetting"
//             className="w-72 bg-white"
//             placeholder="Commission"
//             inputProps={{
//               style: {
//                 height: "3px",
//               },
//             }}
//           />
//           <TextField
//             type="number"
//             className="w-72 bg-white"
//             placeholder="%"
//             inputProps={{
//               style: {
//                 height: "3px",
//               },
//             }}
//           />
//         </span>
//       </div>
//       <span className="w-full h-[.5px] bg-black"></span>
//       <div
//         className="w-full mt-2
//       "
//       >
//         <p className="text-lg tracking-wider capitalize pb-2">
//           Operator Commission Info
//         </p>
//         <p className="text-gray-600 tracking-wider capitalize pb-2">
//           Select Provider Type:
//         </p>
//         <select name="" id="" className="w-72 bg-white h-10"></select>
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-3 text-sm rounded-md text-white font-bold bg-themeColor mb-10 mt-4"
//       >
//         {" "}
//         SUBMIT
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";

export default function SurchargePay() {
  const [mode, setMode] = useState("percentage");
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [amountNumber, setAmountNumber] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0); // Initialized with 0

  const handleModeChange = (event: any) => {
    setMode(event.target.value);
    setCalculatedAmount(0); // Set calculated amount to 0 when mode changes
  };

  const handleAmountChange = (event: any) => {
    const newValue = parseFloat(event.target.value);
    // setAmount(newValue);
    setAmount(newValue.toString());
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
        (parseFloat(amount) * parseFloat(event.target.value)) / 100;
      setCalculatedAmount(parseFloat(amount) + percentageAmount);
    }
  };

  const handleAmountNumberChange = (event: any) => {
    setAmountNumber(event.target.value);
    if (mode === "number") {
      setCalculatedAmount(parseFloat(amount) + parseFloat(event.target.value));
    }
  };

  return (
    <section className="w-full main-container justify-start items-start flex flex-col">
      <div className="w-full mt-4">
        <p className="text-lg capitalize">Amount:</p>
        <TextField
          type="number"
          placeholder="Enter Amount"
          className="w-72 bg-white mt-2"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-full mt-4">
        <p className="text-lg capitalize">Mode:</p>
        <FormControl className="w-72 h-12 bg-white mt-2">
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
      </div>
      {mode === "percentage" && (
        <div className="w-full mt-4">
          <p className="text-lg capitalize">Amount Percentage:</p>
          <TextField
            type="number"
            placeholder="Enter Percentage"
            className="w-72 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={percentage}
            onChange={handlePercentageChange}
          />
        </div>
      )}
      {mode === "number" && (
        <div className="w-full mt-4">
          <p className="text-lg capitalize">Amount Number:</p>
          <TextField
            type="number"
            placeholder="Enter Number"
            className="w-72 bg-white mt-2"
            inputProps={{
              style: {
                height: "5px",
              },
            }}
            value={amountNumber}
            onChange={handleAmountNumberChange}
          />
        </div>
      )}
      <div className="w-full mt-4">
        <p className="text-lg capitalize">Calculated Amount:</p>
        <TextField
          type="number"
          placeholder="Calculated Amount"
          className="w-72 bg-white mt-2"
          inputProps={{
            style: {
              height: "5px",
            },
          }}
          value={calculatedAmount}
        />
      </div>

      <div className="w-full">
        <button className="px-4 py-3 bg-themeColor text-white rounded-md mt-4">
          Send
        </button>
      </div>
    </section>
  );
}
