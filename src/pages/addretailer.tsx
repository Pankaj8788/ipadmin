import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AddRetailers from "../Components/Users/retailers/AddRetailers";

const data = {
  heading: "Register Retailer",
  title: "Dashboard",
  subTitle: "Register Retailer",
  message: "Hello Admin",
};
export default function addretailer() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddRetailers />
    </MainLayout>
  );
}
