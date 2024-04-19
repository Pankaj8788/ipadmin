import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminAddsd from "../Components/Users/admin/AdminAddsd";

const data = {
  heading: "Admin",
  title: "Dashboard",
  subTitle: "Admin",
  message: "Hello,Admin",
};
export default function adminaddsd() {
  return (
    <MainLayout>
      <AdminHeader const data={data} />
      <AdminAddsd />
    </MainLayout>
  );
}
