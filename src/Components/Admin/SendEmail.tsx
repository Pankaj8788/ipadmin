// import React from "react";

// export default function SendEmail() {
//   return <section></section>;
// }

// import React, { useState } from "react";
// import axios from "axios";

// export default function SendEmail() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     // Other form fields
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/register", formData);
//       console.log("Registration successful:", response.data);
//       alert("Registration successful! Check your email for login credentials.");
//     } catch (error) {
//       //   console.error("Error registering user:", error.response.data);
//       alert("Error registering user. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="main-container ">
//       <p className="text-bold font-sm">User Id</p>
//       <input
//         type="text"
//         name="User Id"
//         value={formData.username}
//         onChange={handleChange}
//         placeholder="jj"
//         className="w-1/4 h-10"
//         required
//       />
//       <p className="text-bold font-sm">Password</p>
//       <input
//         type="password"
//         name="password"
//         onChange={handleChange}
//         placeholder=""
//         className="w-1/4 h-10"
//         required
//       />

//       <p className="text-bold font-sm">User Id</p>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="w-1/4 h-10"
//         required
//       />

//       <button
//         type="submit"
//         className="px-4 py-3 bg-themeColor text-white rounded-md"
//       >
//         Send Email
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function SendEmail() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/send-email", formData);
      console.log("Email sent successfully:", response.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="main-container">
      <p className="text-bold font-sm">User Id</p>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-1/4 h-10"
        required
      />

      <p className="text-bold font-sm">Email</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-1/4 h-10"
        required
      />

      <button
        type="submit"
        className="px-4 py-3 bg-themeColor text-white rounded-md"
      >
        Send Email
      </button>
    </form>
  );
}
