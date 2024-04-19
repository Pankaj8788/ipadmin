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
      setCalculatedAmount(newValue - percentageAmount);
    } else {
      setCalculatedAmount(newValue - parseFloat(amountNumber));
    }
  };

  const handlePercentageChange = (event: any) => {
    setPercentage(event.target.value);
    if (mode === "percentage") {
      const percentageAmount =
        (parseFloat(amount) * parseFloat(event.target.value)) / 100;
      setCalculatedAmount(parseFloat(amount) - percentageAmount);
    }
  };

  const handleAmountNumberChange = (event: any) => {
    setAmountNumber(event.target.value);
    if (mode === "number") {
      setCalculatedAmount(parseFloat(amount) - parseFloat(event.target.value));
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
        <FormControl className="w-72 bg-white mt-2">
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

// import React, { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { number } from "yup";

// export default function SurchargePay() {
//   const [mode, setMode] = useState("percentage");
//   const [amount, setAmount] = useState("");
//   const [percentage, setPercentage] = useState("");
//   const [amountNumber, setAmountNumber] = useState("");
//   const [calculatedAmount, setCalculatedAmount] = useState("");

//   const handleModeChange = (event: any) => {
//     setMode(event.target.value);
//     setCalculatedAmount(0);
//   };

//   const handleAmountChange = (event: any) => {
//     const newValue = parseFloat(event.target.value);
//     setAmount(newValue);
//     if (mode === "percentage") {
//       const percentageAmount = (newValue * parseFloat("percentage")) / 100;
//       setCalculatedAmount(newValue - percentageAmount);
//     } else {
//       setCalculatedAmount(newValue - parseFloat("amount"));
//     }
//   };

//   const handlePercentageChange = (event: any) => {
//     setPercentage(event.target.value);
//     if (mode === "percentage") {
//       const percentageAmount =
//         (parseFloat(amount) * parseFloat(event.target.value)) / 100;
//       setCalculatedAmount(parseFloat(amount) - percentageAmount);
//     }
//   };

//   const handleAmountNumberChange = (event: any) => {
//     setAmountNumber(event.target.value);
//     if (mode === "number") {
//       setCalculatedAmount(parseFloat(amount) - parseFloat(event.target.value));
//     }
//   };

//   return (
//     <section className="w-full main-container justify-start items-start flex flex-col">
//       <div className="w-full mt-4">
//         <p className="text-lg capitalize">Amount:</p>
//         <TextField
//           type="number"
//           placeholder="Enter Amount"
//           className="w-72 bg-white mt-2"
//           inputProps={{
//             style: {
//               height: "5px",
//             },
//           }}
//           value={amount}
//           onChange={handleAmountChange}
//         />
//       </div>
//       <div className="w-full mt-4">
//         <p className="text-lg capitalize">Mode:</p>
//         <FormControl className="w-72 bg-white mt-2">
//           <Select
//             labelId="mode-select-label"
//             id="mode-select"
//             value={mode}
//             onChange={handleModeChange}
//           >
//             <MenuItem value="percentage">Percentage</MenuItem>
//             <MenuItem value="number">Rupees</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       {mode === "percentage" && (
//         <div className="w-full mt-4">
//           <p className="text-lg capitalize">Amount Percentage:</p>
//           <TextField
//             type="number"
//             placeholder="Enter Percentage"
//             className="w-72 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             value={percentage}
//             onChange={handlePercentageChange}
//           />
//         </div>
//       )}
//       {mode === "number" && (
//         <div className="w-full mt-4">
//           <p className="text-lg capitalize">Amount Number:</p>
//           <TextField
//             type="number"
//             placeholder="Enter Number"
//             className="w-72 bg-white mt-2"
//             inputProps={{
//               style: {
//                 height: "5px",
//               },
//             }}
//             value={amountNumber}
//             onChange={handleAmountNumberChange}
//           />
//         </div>
//       )}
//       <div className="w-full mt-4">
//         <p className="text-lg capitalize">Calculated Amount:</p>
//         <TextField
//           type="number"
//           placeholder="Calculated Amount"
//           className="w-72 bg-white mt-2"
//           inputProps={{
//             style: {
//               height: "5px",
//             },
//           }}
//           value={calculatedAmount}
//         />
//       </div>

//       <div className="w-full">
//         <button className=" px-4 py-3 bg-themeColor text-white rounded-md mt-4">
//           Send
//         </button>
//       </div>
//     </section>
//   );
// }
