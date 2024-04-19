import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminAddR from "../Components/Users/admin/AdminAddR";

const data = {
  heading: "Admin",
  title: "Dashboard",
  subTitle: "Admin",
  message: "Hello,Admin",
};

export default function adminaddr() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AdminAddR />
    </MainLayout>
  );
}
