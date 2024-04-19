import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, MenuItem, Button } from "@mui/material";
const AddMainBalance = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        const responsebalance = await axios.get(
          "http://localhost:5000/api/protected/balance",
          {
            headers: headers,
          }
        );
        setData(responsebalance.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    receiverId: "",
    receiverName: "",
    receiverType: "",
    amount: "",
    reason: "",
  });
  const [message, setMessage] = useState("");
  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const fetchReceiverDetails = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get(
        `http://localhost:5000/api/protected/userrr/${formData.receiverId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const { name: receiverName, user_type: receiverType } =
        response.data.user;
      setFormData({
        ...formData,
        receiverName,
        receiverType,
      });
    } catch (error) {
      console.log("Error fetching receiver details:", error);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:5000/api/protected/transfer",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      // Check if the response contains a message
      if (response.data.message) {
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      // Check if the error response contains a message
      if (error.response && error.response.data.message) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "Receiver is not under the sender") {
          Swal.fire({
            icon: "error",
            title: "Receiver is not under you",
          });
        } else if (errorMessage === "Receiver does not exist") {
          Swal.fire({
            icon: "error",
            title: "Receiver does not exist",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error transferring funds",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error transferring funds",
        });
      }
    }
  };
  return (
    <section className="flex w-full main-container">
      <div className="rounded-full">
        <div className="gap-6 main-container bg-white border-2 border-gray-400 rounded-3xl h-150">
          <h2 className="text-xl font-bold">Fund Transfer</h2>
          <form onSubmit={handleSubmit} className="gap-6">
            <div className="flex mb-1 flex-col h-12">
              <p className="font-medium text-md">Receiver ID:</p>
              <div className="flex">
                <input
                  type="text"
                  name="receiverId"
                  value={formData.receiverId}
                  onChange={handleInputChange}
                  placeholder=""
                  className="h-10 w-64 bg-white rounded-sm mb-4 border-2 border-gray-400"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={fetchReceiverDetails}
                  className="px-2 py-2 mb-9 ml-4 bg-[#C6BCFF] text-white rounded-xl text-sm "
                >
                  <SearchIcon className="text-white" />
                  Search
                </Button>
              </div>
            </div>
            <div className="flex mt-4 mb-1 flex-col h-12">
              <p className="font-medium text-md mb-2">Receiver Name:</p>
              <input
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
                className="h-10 w-54 bg-white rounded-sm mb-4 border-2 border-gray-400"
              />
            </div>
            <div className="h-12 mt-2 flex flex-col">
              <p className="font-medium text-md mb-2">Receiver Type</p>
              <input
                name="receiverType"
                value={formData.receiverType}
                onChange={handleInputChange}
                className="h-10 w-54 bg-white rounded-sm  border-2 border-gray-400"
              />
            </div>
            <div className="items-start mt-4">
              <p className="font-medium text-md mb-2">Amount:</p>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="h-8 w-64 bg-white rounded-sm  border-2 border-gray-400"
              />
            </div>
            <div className="items-start">
              <p className="font-medium text-md mb-2">Reason:</p>
              <TextField
                type="text"
                name="reason"
                multiline
                rows={2}
                value={formData.reason}
                onChange={handleInputChange}
                className="h-10 w-64 bg-white rounded-md  border-2 border-gray-400"
                inputProps={{
                  style: {
                    height: "3px",
                  },
                }}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 mt-12 bg-themeColor text-sm rounded-md text-white font-bold"
            >
              Transfer Funds
            </button>
          </form>
          <div className="w-full flex items-center justify-between mt-4 mb-4 h-36">
            <div className="w-full h-full rounded-xl bg-[#6C45BF] shadow-[0_10px_20px_rgba(00,00,00)] flex flex-col items-center justify-center gap-6">
              <h1 className="text-2xl font-bold capitalize text-white ">
                Wallet Balance
              </h1>
              <h1 className="text-2xl font-bold capitalize text-white ">
                {data?.balance} &#x20B9;
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddMainBalance;
