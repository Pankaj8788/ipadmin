import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Settings from "../Components/Admin/Settings";

const data = {
  heading: "Settings",
  title: "Dashboard",
  subTitle: "Settings",
  message: "Hello,Admin",
};
export default function setting() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Settings />
    </MainLayout>
  );
}
