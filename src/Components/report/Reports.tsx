import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function Reports() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("");

  const handleSearch = async () => {
    try {
      let apiUrl = "";
      if (transactionType === "wallet") {
        // apiUrl = `http://localhost:5000/api/ftrans?startDate=${fromDate}&endDate=${toDate}`;
        apiUrl = `http://localhost:5000/api/protected/adminalltransactions`;
      } else if (transactionType === "transactions") {
        // apiUrl = `http://localhost:5000/api/protected/adminalltransactions`;
      }
      const response = await axios.get(apiUrl);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <section>
      <section className="main-container w-full flex h-35 shadow-2xl bg-[#6633CC] rounded-xl border-solid border-2 border-black">
        <div className="flex ">
          <div className="flex w-full justify-between mt-2">
            <div className="flex flex-col ">
              <p className="text-lg text-bold text-white">From Date:</p>
              <TextField
                type="date"
                className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
                placeholder="From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-lg text-bold text-white">To Date:</p>
              <TextField
                type="date"
                className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
                placeholder="To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                inputProps={{
                  style: {
                    height: "5px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-lg text-bold text-white">Transaction Type:</p>
              <select
                name="transactionType"
                id="transactionType"
                className="w-40 h-10 mt-2 bg-[#c6bcff] rounded-lg"
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="wallet">Wallet</option>
                <option value="transactions">Transaction</option>
              </select>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                className="px-2 py-2 mt-8 mb-1 ml-4 bg-[#c6bcff] text-white rounded-xl text-sm "
              >
                <SearchIcon className="text-white" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-4 ">
        <div>
          <div className="">
            <h2 className="text-bold text-white text-xl mt-4 font-semibold mb-4">
              {transactionType === "wallet" ? "Wallet" : "Transaction"}{" "}
              Transactions
            </h2>
            <table className="border-collapse border border-white-600 w-full ">
              <thead>
                {transactionType === "wallet" ? (
                  <tr className="border border-white-600">
                    <th className="text-center text-black text-lg border border-white-600 h-12">
                      Transaction ID (Wallet)
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Sender ID
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Receiver ID
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Receiver Name
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Receiver Type
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Amount (Wallet)
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Reason
                    </th>
                    <th className="text-center text-black text-lg border border-white-600">
                      Transaction Date (Wallet)
                    </th>
                  </tr>
                ) : (
                  <tr className="border border-white-600 bg-[#b6a1f9]">
                    <th className="text-center text-white text-lg border border-white-600 h-10">
                      Transaction ID (Transaction)
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      PG Type
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Added On
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Amount
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Bank Name
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Bank Reference Number
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Bank Code
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Cancellation Reason
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Card Category
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Card Type
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Card Number
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Status
                    </th>
                    <th className="text-center text-white text-lg border border-white-600">
                      Result
                    </th>
                  </tr>
                )}
              </thead>
              <tbody>
                {transactions.map((transaction: any, index) => (
                  <tr
                    key={transaction.transaction_id}
                    className={`${
                      index % 2 === 0 ? "bg-[#6633CC]" : "bg-[#330066]"
                    } border border-white-600`}
                  >
                    <td className="text-center text-white text-md border border-white-600 h-10">
                      {transactionType === "wallet"
                        ? transaction.transaction_id
                        : transaction.txnid}
                    </td>
                    {transactionType === "wallet" ? (
                      <>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.sender_id}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.receiver_id}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.receiver_name}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.receiver_type}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.amount}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.reason}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.created_at}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.pg_type}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.addedon}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.amount}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.bank_name}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.bank_ref_num}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.bankcode}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.cancellation_reason}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.cardCategory}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.card_type}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.cardnum}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.status}
                        </td>
                        <td className="text-center text-white text-md border border-white-600">
                          {transaction.result}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}

// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// export default function Reports() {
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [transactions, setTransactions] = useState([]);
//   const [transactionType, setTransactionType] = useState("");

//   const handleSearch = async () => {
//     try {
//       let apiUrl = "";
//       if (transactionType === "wallet") {
//         apiUrl = `http://localhost:8080/api/ftrans?startDate=${fromDate}&endDate=${toDate}`;
//       } else if (transactionType === "transactions") {
//         apiUrl = `http://localhost:8080/api/all`;
//       }
//       const response = await axios.get(apiUrl);
//       setTransactions(response.data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   return (
//     <section>
//       <section className="main-container w-full flex h-35 shadow-2xl bg-[#6633CC] rounded-xl border-solid border-2 border-black">
//         <div className="flex ">
//           <div className="flex w-full justify-between mt-2">
//             <div className="flex flex-col ">
//               <p className="text-lg text-bold text-white">From Date:</p>
//               <TextField
//                 type="date"
//                 className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                 placeholder="From Date"
//                 value={fromDate}
//                 onChange={(e) => setFromDate(e.target.value)}
//                 inputProps={{
//                   style: {
//                     height: "5px",
//                   },
//                 }}
//               />
//             </div>
//             <div className="flex flex-col ml-4">
//               <p className="text-lg text-bold text-white">To Date:</p>
//               <TextField
//                 type="date"
//                 className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                 placeholder="To Date"
//                 value={toDate}
//                 onChange={(e) => setToDate(e.target.value)}
//                 inputProps={{
//                   style: {
//                     height: "5px",
//                   },
//                 }}
//               />
//             </div>
//             <div className="flex flex-col ml-4">
//               <p className="text-lg text-bold text-white">Transaction Type:</p>
//               <select
//                 name="transactionType"
//                 id="transactionType"
//                 className="w-40 h-10 mt-2 bg-[#c6bcff] rounded-lg"
//                 onChange={(e) => setTransactionType(e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="wallet">Wallet</option>
//                 <option value="transactions">Real-time Payment</option>
//               </select>
//             </div>
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSearch}
//                 className="px-2 py-2 mt-8 mb-1 ml-4 bg-[#c6bcff] text-white rounded-xl text-sm "
//               >
//                 <SearchIcon className="text-white" />
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="ml-4 ">
//         <div>
//           <div className="">
//             <h2 className="text-bold text-white text-xl mt-4 font-semibold mb-4">
//               {transactionType === "wallet" ? "Wallet" : "Real-time Payment"}{" "}
//               Transactions
//             </h2>
//             <table className="border-collapse border border-white-600 w-full ">
//               <thead>
//                 {transactionType === "wallet" ? (
//                   <tr className="border border-white-600">
//                     <th className="text-center text-black text-lg border border-white-600 h-12">
//                       Transaction ID
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Sender ID
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Receiver ID
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Amount
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Transaction Date
//                     </th>
//                   </tr>
//                 ) : (
//                   <tr className="border border-white-600 bg-[#b6a1f9]">
//                     <th className="text-center text-black text-lg border border-white-600 h-10">
//                       Transaction ID
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       PG Type
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Added On
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Amount
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Bank Name
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Bank Reference Number
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Bank Code
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Cancellation Reason
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Card Category
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Card Type
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Card Number
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Status
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       Result
//                     </th>
//                     <th className="text-center text-black text-lg border border-white-600">
//                       UPI VA
//                     </th>
//                   </tr>
//                 )}
//               </thead>
//               <tbody>
//                 {transactions.map((transaction) => (
//                   <tr
//                     key={transaction.transaction_id}
//                     className={`border border-white-600 ${
//                       transactionType === "wallet"
//                         ? ""
//                         : "bg-[#6633CC] text-white"
//                     }`}
//                   >
//                     <td className="text-center text-md border border-white-600">
//                       {transaction.transaction_id}
//                     </td>
//                     {transactionType === "wallet" ? (
//                       <>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.sender_id}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.receiver_id}
//                         </td>
//                       </>
//                     ) : (
//                       <>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.pg_type}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.addedon}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.bank_name}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.bank_ref_num}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.bankcode}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.cancellation_reason}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.cardCategory}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.card_type}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.cardnum}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.status}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.result}
//                         </td>
//                         <td className="text-center text-md border border-white-600">
//                           {transaction.upi_va}
//                         </td>
//                       </>
//                     )}
//                     <td className="text-center text-md border border-white-600">
//                       {transaction.amount}
//                     </td>
//                     <td className="text-center text-md border border-white-600">
//                       {transaction.transaction_date || transaction.addedon}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

////..........transaction
// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";

// export default function Reports() {
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [transactions, setTransactions] = useState([]);
//   const [transactionType, setTransactionType] = useState("");

//   const handleSearch = async () => {
//     try {
//       let apiUrl = "";
//       if (transactionType === "wallet") {
//         apiUrl = `http://localhost:8080/api/ftrans?startDate=${fromDate}&endDate=${toDate}`;
//       } else if (transactionType === "transactions") {
//         apiUrl = `http://localhost:8080/api/all`;
//       }
//       const response = await axios.get(apiUrl);
//       setTransactions(response.data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };

//   return (
//     <section>
//       <section className="main-container w-full flex h-35 shadow-2xl bg-[#6633CC] rounded-xl border-solid border-2 border-black">
//         <div className="flex ">
//           <div className="flex w-full justify-between mt-2">
//             <div className="flex flex-col ">
//               <p className="text-lg text-bold text-white">From Date:</p>
//               <TextField
//                 type="date"
//                 className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                 placeholder="From Date"
//                 value={fromDate}
//                 onChange={(e) => setFromDate(e.target.value)}
//                 inputProps={{
//                   style: {
//                     height: "5px",
//                   },
//                 }}
//               />
//             </div>
//             <div className="flex flex-col ml-4">
//               <p className="text-lg text-bold text-white">To Date:</p>
//               <TextField
//                 type="date"
//                 className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                 placeholder="To Date"
//                 value={toDate}
//                 onChange={(e) => setToDate(e.target.value)}
//                 inputProps={{
//                   style: {
//                     height: "5px",
//                   },
//                 }}
//               />
//             </div>
//             <div className="flex flex-col ml-4">
//               <p className="text-lg text-bold text-white">Transaction Type:</p>
//               <select
//                 name="transactionType"
//                 id="transactionType"
//                 className="w-40 h-10 mt-2 bg-[#c6bcff] rounded-lg"
//                 onChange={(e) => setTransactionType(e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="wallet">Wallet</option>
//                 <option value="transactions">Transactions</option>
//               </select>
//             </div>
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSearch}
//                 className="px-2 py-2 mt-8 mb-1 ml-4 bg-[#c6bcff] text-white rounded-xl text-sm "
//               >
//                 <SearchIcon className="text-white" />
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="ml-4 ">
//         <div>
//           <div className="">
//             <h2 className="text-bold text-white text-xl mt-4 font-semibold mb-4">
//               Wallet Transactions
//             </h2>
//             <table className="border-collapse border border-white-600 w-full ">
//               <thead>
//                 <tr className="border border-white-600 bg-[#b6a1f9]">
//                   <th className="text-center text-black text-lg border border-white-600 h-10">
//                     Transaction ID
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     PG Type
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Added On
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Amount
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Bank Name
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Bank Reference Number
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Bank Code
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Cancellation Reason
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Card Category
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Card Type
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Card Number
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Status
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Result
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     UPI VA
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction: any, index) => (
//                   <tr
//                     key={transaction.id}
//                     className={`${
//                       index % 2 === 0 ? "bg-[#6633CC]" : "bg-[#330066]"
//                     } border border-white-600`}
//                   >
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.id}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.pg_type}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.addedon}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.amount}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.bank_name}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.bank_ref_num}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.bankcode}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.cancellation_reason}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.cardCategory}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.card_type}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.cardnum}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.status}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.result}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.upi_va}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
//'''''''''''''''''''''''''''''''''

//...................................................................................
// import React, { useEffect, useState } from "react";
// import { TextField, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";
// export default function Reports() {
//   // const [userID, setUserID] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [transactions, setTransactions] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/ftrans?startDate=${fromDate}&endDate=${toDate}`
//       );
//       const data = await response.json();
//       setTransactions(data);
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//     }
//   };
//   return (
//     <section>
//       <section className="main-container w-full flex  h-35 shadow-2xl bg-[#6633CC] rounded-xl border-solid border-2 border-black">
//         <div className="flex flex-col">
//           <span className="justify-start">
//             <div className="flex ">
//               <div className="flex w-full justify-between ">
//                 <div className="flex flex-col">
//                   <p className="text-lg text-bold text-white">
//                     Transaction Type:
//                   </p>
//                   <select
//                     name="user"
//                     id="user"
//                     className="w-40 h-10 mt-2 bg-[#c6bcff] rounded-lg"
//                   >
//                     <option value="">Select</option>
//                     <option value="">wallet</option>
//                     <option value="">Transaction</option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col ml-8">
//                   <p className="text-lg text-bold text-white">User:</p>
//                   <select
//                     name="user"
//                     id="user"
//                     className="w-40 h-10 mt-2 bg-[#c6bcff] rounded-lg"
//                   >
//                     <option value="">Select User</option>
//                   </select>
//                 </div>
//                 <div className="flex flex-col ml-8">
//                   <p className="text-lg text-bold text-white">Mobile Number:</p>
//                   <TextField
//                     type="text"
//                     className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                     placeholder="Mo.Number"
//                     inputProps={{
//                       style: {
//                         height: "5px",
//                       },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col ml-8">
//                   <p className="text-lg text-bold text-white">From Date:</p>
//                   <TextField
//                     type="Date"
//                     className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                     placeholder="From Date"
//                     value={fromDate}
//                     onChange={(e) => setFromDate(e.target.value)}
//                     inputProps={{
//                       style: {
//                         height: "5px",
//                       },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col ml-8">
//                   <p className="text-lg text-bold text-white">To Date:</p>
//                   <TextField
//                     type="date"
//                     className="w-40 bg-[#c6bcff] mt-2 rounded-lg"
//                     placeholder="To Date"
//                     value={toDate}
//                     onChange={(e) => setToDate(e.target.value)}
//                     inputProps={{
//                       style: {
//                         height: "5px",
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </span>
//           <span className="justify-end item-end">
//             <div>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSearch}
//                 className="px-2 py-2 mt-8 mb-1 ml-4 bg-[#c6bcff] text-white rounded-xl text-sm "
//               >
//                 <SearchIcon className="text-white" />
//                 Search
//               </Button>
//             </div>
//           </span>
//         </div>
//       </section>

//       <section className="main-container mt-20 mb-4">
//         <div>
//           <div className="">
//             <h2 className="text-bold text-white text-xl mt-4 font-semibold mb-4">
//               Wallet Transactions
//             </h2>
//             <table className="border-collapse border border-white-600 w-full ">
//               <thead>
//                 <tr className="border border-white-600">
//                   <th className="text-center text-black text-lg border border-white-600 h-12">
//                     Transaction ID
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Sender ID
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Receiver ID
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Amount
//                   </th>
//                   <th className="text-center text-black text-lg border border-white-600">
//                     Transaction Date
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction: any, index: number) => (
//                   <tr
//                     key={transaction.transaction_id}
//                     className={`${
//                       index % 2 === 0 ? "bg-[#6633CC]" : "bg-[#330066]"
//                     } border border-white-600`}
//                   >
//                     <td className="text-center text-white text-md border border-white-600 h-10">
//                       {transaction.transaction_id}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.sender_id}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.receiver_id}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.amount}
//                     </td>
//                     <td className="text-center text-white text-md border border-white-600">
//                       {transaction.transaction_date}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
//.................................................................................................
