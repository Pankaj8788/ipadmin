import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import ChangeMobileNoKYC from "../Components/Users/ChangeMobileNoKYC";

const data = {
  heading: "Change Mobile Number",
  title: "Dashboard",
  subTitle: "Change Mobile Number",
  message: "Hello,Admin",
};
export default function Changemobilenumber() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <ChangeMobileNoKYC />
    </MainLayout>
  );
}
