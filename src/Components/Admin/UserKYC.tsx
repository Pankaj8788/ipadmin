import React from "react";

export default function UserKYC() {
  return (
    <section className="main-container w-full justify-start items-start">
      <div className="w-full flex flex-col justify-start gap-4 ">
        <p className="font-bold text-sm capitalize">KYC Status</p>
        <select name=" " id="" className="w-64 bg-white h-12 rounded-md mb-2">
          <option value="" className="text-[#A1A1A1]">
            Screening
          </option>
        </select>
      </div>

      <div className="w-full flex items-center justify-start gap-6 mt-8">
        <button type="button" className="rounded-md bg-themeColor px-7 py-3">
          {" "}
          SEARCH
        </button>

        <button type="button" className="bg-themeColor rounded-md px-7 py-3">
          {" "}
          EXPORT
        </button>
      </div>
    </section>
  );
}
