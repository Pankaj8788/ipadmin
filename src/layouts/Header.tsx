import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  return (
    <section className="bg-[#E7EBF8] ">
      <section className="main-container w-full h-16 flex items-center justify-between ">
        <div className="w-full">
          <span className="relative">
            <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search for number"
              className="w-96 h-10 border-2 pl-10 border-black rounded-full "
            />
          </span>
        </div>
        <div className="w-full flex items-center justify-end gap-6">
          <NotificationsIcon />
          <AccountCircleIcon />
          <ArrowDropDownCircleIcon />
        </div>
      </section>
    </section>
  );
}
