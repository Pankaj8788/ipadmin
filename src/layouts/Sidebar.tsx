import React, { useEffect, useState } from "react";
import { MainLogo, RockkpayLogo } from "../Assets/navbar";
import { newSideBarArr, sidebarMenuArr } from "../utils/navbar";
import MenuCard from "./MenuCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import axios from "axios";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [navData, setNavData] = useState<any>();
  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
    // Clear token from session storage
    sessionStorage.removeItem("jwtToken");
    // Redirect to login page
    router.push("/admin");
  };

  useEffect(() => {
    const mapData = localStorage.getItem("navData");
    const requereData = newSideBarArr.filter((item) => {
      if (item.userType === mapData) {
        return item.mainArr;
      }
    });
    const newData = requereData.map((item, index) => {
      return item.mainArr;
    });
    setData(newData[0]);
    // console.log(mapData);
  }, []);
  // console.log(data);

  return (
    <section
      className={` bg-[#6633cc] h-screen overflow-y-scroll barOne p-4 flex flex-col items-center justify-start gap-2 relative ${
        isOpen ? "w-20" : "w-full"
      }`}
    >
      {!isOpen ? (
        <KeyboardDoubleArrowLeftIcon
          className="absolute top-3 right-3 !text-white"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      ) : (
        <KeyboardDoubleArrowRightIcon
          className="absolute top-3 right-3 !text-white"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <div className="w-full center ">
        <img src={RockkpayLogo.src} alt="" className="w-28 h-28 rounded-full" />
      </div>
      <div className="w-full p-4 flex flex-col items-start justify-start gap-2">
        {data.map((item: any, index: number) => (
          <MenuCard item={item} key={index} index={index} />
        ))}
      </div>
      <button
        className="w-full pl-6 p-2 flex cursor-pointer items-center justify-start gap-2 rounded-md bg-red-700"
        onClick={handleLogout}
        type="button"
      >
        <LogoutIcon className="!text-white" />
        <p className="text-white font-semibold text-lg capitalize">log out</p>
      </button>
    </section>
  );
}
