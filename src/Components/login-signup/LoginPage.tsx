import { MainLogo } from "@/src/Assets/navbar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Login_bg, breadcrumimg, desktopscreen } from "@/src/Assets/login";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../redux/actions/authActions";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    user_id: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        credentials
      );
      // const navData = response.data.user.userType;

      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("navData", response.data.user.user_type);

      console.log(response.data.token);
      console.log(response.data.user.user_type);
      console.log(response.data.user.balance);

      const userData = response.data.user;
      dispatch(login(userData));
      if (response.data.user.user_type == "Admin") {
        router.push("/admin-dashboard");
      } else if (response.data.user.user_type == "Channel_Partner") {
        router.push("/cpbreadcrumb");
      } else if (response.data.user.user_type == "Super_Distributor") {
        router.push("/sdbreadcrumb");
      } else if (response.data.user.user_type == "Master_Distributor") {
        router.push("/mdbreadcrumb");
      } else if (response.data.user.user_type == "Distributor") {
        router.push("/dbreadcrumb");
      } else if (response.data.user.user_type == "Retailer") {
        router.push("/rbreadcrumb");
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Login successful.",
      });
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect username or password. Please try again.",
      });
    }
  };

  return (
    <section
      className="w-full h-full bg-center bg-cover bg-no-repeat  "
      style={{ backgroundImage: `url(${desktopscreen.src})` }}
    >
      <section className=" main-container  w-full h-screen flex  gap-6 pt-12">
        <div className="w-full h-full flex flex-col item-start justify-start gap-10">
          <span className="w-full">
            <p className="w-full text-center text-white text-4xl">
              Ipaisa-One Time Solution
            </p>
            <p className="w-full text-center text-white text-4xl mt-4">
              For All Your Payments
            </p>
          </span>
          <img
            src={breadcrumimg.src}
            alt=""
            className="h-[70vh] w-auto object-contain "
          />
        </div>
        <div className="w-full h-full center">
          <div className="h-[70vh] w-1/2 bg-[#0075ff] bg-opacity-25 rounded-3xl flex flex-col items-start justify-start gap-4 p-4">
            <div className="w-full flex items-center justify-between">
              <span className="w-full">
                <p className="w-full capitalize text-white text-lg font-bold">
                  Sign in to
                </p>
                <p className="capitalize text-white text-md mt-2">
                  Welcome to iPaisa
                </p>
              </span>
              <span className="w-full flex justify-end">
                <img
                  src={MainLogo.src}
                  alt=""
                  className=" w-20 h-20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full"
                />
              </span>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <p className="text-white font-bold capitalize">
                enter your userId
              </p>
              <TextField
                fullWidth
                type="text"
                onChange={handleInputChange}
                placeholder="Enter your UserId"
                name="user_id"
                inputProps={{
                  style: {
                    border: "1px solid white",
                    borderRadius: "5px",
                    height: "10px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-2">
              <p className="text-white font-bold capitalize">
                enter your password
              </p>
              <TextField
                fullWidth
                type="password"
                placeholder="Enter your password"
                name="password"
                inputProps={{
                  style: {
                    border: "1px solid white",
                    borderRadius: "5px",
                    height: "10px",
                    backgroundColor: "white",
                  },
                }}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="w-full flex items-center justify-start gap-2">
                {/* <input type="checkbox" name="" id="" /> */}
                {/* <p className="text-white text-sm capitalize">remember me</p> */}
              </span>
              <span className="w-full flex justify-end ">
                <p className="text-white text-sm capitalize">
                  Forgot password ?
                </p>
              </span>
            </div>

            <button
              className="w-full py-3 bg-[#205CC3] rounded-md text-white font-bold capitalize z-50 mt-4 transition-all duration-300 ease-in-out active:scale-90"
              type="submit"
              onClick={handleLogin}
            >
              login
            </button>
            <p className="text-sm text-center w-full text-white mt-10">
              ipaisa {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
