import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function AddMasterDistributor() {
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
    // <div className="gap-4 main-container">
    //   <h2>Create New User</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mt-2 flex flex-col">
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.name}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         name="email"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.email}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         name="password"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.password}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>User Type:</label>

    //       <select
    //         name="userType"
    //         value={userData.userType}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       >
    //         <option value="">Select User Type</option>
    //         <option value="Channel Partner">Master Distributor</option>
    //       </select>
    //     </div>
    //     <div className="mt-2">
    //       <label>Category:</label>
    //       <select
    //         name="category"
    //         value={userData.category}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       >
    //         <option value="">Select Category</option>
    //         <option value="Fixed">Fixed</option>
    //         <option value="Variable">Variable</option>
    //       </select>
    //     </div>
    //     <div className="mt-2">
    //       <label>Middle Name:</label>
    //       <input
    //         type="text"
    //         name="middleName"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.middleName}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>Last Name:</label>
    //       <input
    //         type="text"
    //         name="lastName"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.lastName}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>Mobile Number:</label>
    //       <input
    //         type="number"
    //         name="mobileNumber"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.mobileNumber}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>outletName:</label>
    //       <input
    //         type="text"
    //         name="outletName"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.outletName}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>aadharcardNumber:</label>
    //       <input
    //         type="number"
    //         name="aadharcardNumber"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.aadharcardNumber}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>gstin:</label>
    //       <input
    //         type="number"
    //         name="gstin"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.gstin}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>dateOfBirth:</label>
    //       <input
    //         type="Date"
    //         name="dateOfBirth"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.dateOfBirth}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>bankAccountNumber:</label>
    //       <input
    //         type="number"
    //         name="bankAccountNumber"
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //         value={userData.bankAccountNumber}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>ifsc:</label>
    //       <input
    //         type="text"
    //         name="ifsc"
    //         value={userData.ifsc}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>address:</label>
    //       <input
    //         type="text"
    //         name="address"
    //         value={userData.address}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>pincode:</label>
    //       <input
    //         type="number"
    //         name="pincode"
    //         value={userData.pincode}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>district:</label>
    //       <input
    //         type="text"
    //         name="district"
    //         value={userData.district}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>state:</label>
    //       <input
    //         type="text"
    //         name="state"
    //         value={userData.state}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>city:</label>
    //       <input
    //         type="text"
    //         name="city"
    //         value={userData.city}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>alternateNumber:</label>
    //       <input
    //         type="number"
    //         name="alternateNumber"
    //         value={userData.alternateNumber}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <div className="mt-2">
    //       <label>pancardNumber:</label>
    //       <input
    //         type="number"
    //         name="pancardNumber"
    //         value={userData.pancardNumber}
    //         onChange={handleChange}
    //         className="ml-2 h-10 w-1/4 bg-white rounded-md"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="px-4 py-3 bg-themeColor rounded-md text-white center"
    //     >
    //       Create User
    //     </button>
    //   </form>
    // </div>

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
                <option value="Master_Distributor">Master Distributor</option>
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
export default AddMasterDistributor;
