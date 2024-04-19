import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export const CommissionPacksPage = () => {
  return (
    <section className="h-[calc(100vh-9rem)] w-full main-container flex flex-col items-start justify-start gap-6 my-8 ">
      <p>Edit Package</p>
      <div className="flex items-start justify-start gap-6 w-full">
        <div className="w-full h-28 flex flex-col justify-between items-start ">
          <p className="text-themeColor">Package ID:</p>
          <p>0000-0000-0000</p>
        </div>

        <div className="w-full h-28 flex flex-col justify-between items-start ">
          <p className="text-themeColor">Package ID:</p>
          <p>member</p>
        </div>

        <div className="w-full h-28 flex flex-col justify-between items-start ">
          <p className="text-themeColor">Package ID:</p>
          <p>0-00-0000 & abcd</p>
        </div>
        <div className="w-full h-28 flex flex-col justify-between items-start ">
          <p className="text-themeColor">Edit</p>
          <span className="w-full flex items-end justify-start gap-4">
            <EditIcon />
            <DeleteIcon className="!text-red-700" />
          </span>
        </div>
      </div>
    </section>
  );
};
