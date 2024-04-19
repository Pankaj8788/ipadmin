import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import UserKYC from "../Components/Admin/UserKYC";

const data = {
  heading: "USER KYC",
  title: "Dashboard",
  subTitle: "User KYC",
  message: "Hello,Admin",
};
export default function userkyc() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <UserKYC />
    </MainLayout>
  );
}
