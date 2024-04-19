import React from "react";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import { mobilerecharge } from "@/src/Assets/retailer";

export default function Rservices() {
  return (
    <section>
      <section className="main-container w-full flex flex-col  h-35 shadow-2xl bg-[#9D9FD7] rounded-xl border-solid border-2 border-black ">
        <div className="w-full flex flex-col mt-4">
          <span>
            <p className="font-bold text-lg mt-4">Manage Your Money</p>
          </span>
          <span className="flex mt-4 mb-6">
            <button className="text-white">
              <AddIcon className="mr-2" />
              Add Money
            </button>
            <button className="text-white ml-8">
              <HistoryIcon className="mr-2" />
              Transaction History
            </button>
            {/* <p className="text-white">Add Money</p>
          <p className="text-white ml-8">Transaction History</p> */}
          </span>
        </div>
      </section>
      <section className="main-container">
        <div className="w-full mt-4 ">
          <p className="text-white font-bold text-lg">
            Utilities Payment By BBPS
          </p>
        </div>
        {/* Recharge Payment */}
        <div className="flex">
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Mobile </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col ">
              <p className="text-white font-semibold ml-2">DTH</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">FASTag </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Credit </p>
              <p className="text-white font-semibold ml-2">Card</p>
            </div>
          </div>
        </div>

        {/* Utilities payment */}
        <div className="w-full mt-4 ">
          <p className="text-white font-bold text-lg">Utilities Payment</p>
        </div>
        <div className="flex">
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Mobile </p>
              <p className="text-white font-semibold">Postpaid</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col ">
              <p className="text-white font-semibold ml-2">Electricity</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Water </p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Book a</p>
              <p className="text-white font-semibold"> Cyclinder</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Broadband</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Landline </p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Rent</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Piped </p>
              <p className="text-white font-semibold ml-2">Gas</p>
            </div>
          </div>
        </div>

        {/* Financial Services */}
        <div className="w-full mt-4 ">
          <p className="text-white font-bold text-lg">Financial Services</p>
        </div>
        <div className="flex">
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Mobile </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col ">
              <p className="text-white font-semibold ml-2">DTH</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">FASTag </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Credit </p>
              <p className="text-white font-semibold ml-2">Card</p>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="w-full mt-4 ">
          <p className="text-white font-bold text-lg">Financial Services</p>
        </div>
        {/* <div className="flex">
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">Mobile </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col ">
              <p className="text-white font-semibold ml-2">DTH</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="text-white font-semibold">FASTag </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>
        </div> */}
        <div className="flex">
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-1 flex flex-col">
              {" "}
              {/* Decreased margin */}
              <p className="text-white font-semibold">Mobile </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-1 flex flex-col ">
              <p className="text-white font-semibold ml-2">DTH</p>
            </div>
          </div>

          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <div className="rounded-full bg-[#100335] w-16 h-16 flex items-center justify-center">
              <img
                src={mobilerecharge.src}
                alt="Icon"
                className="h-8 w-8 bg-white"
              />
            </div>
            <div className="ml-1 flex flex-col">
              <p className="text-white font-semibold">FASTag </p>
              <p className="text-white font-semibold"> Recharge</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
