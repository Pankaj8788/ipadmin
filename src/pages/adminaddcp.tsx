import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminAddcp from "../Components/Users/admin/AdminAddcp";
import AdminHeader from "../Components/commonComponents/AdminHeader";

const data = {
  heading: "Admin",
  title: "Dashboard",
  subTitle: "Admin",
  message: "Hello,Admin",
};
export default function adminaddcp() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AdminAddcp />
    </MainLayout>
  );
}
