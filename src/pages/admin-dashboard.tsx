import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Breadcrumb from "../Components/dashboard/Breadcrumb";
const data = {
  heading: "Admin Dashboard",
  title: "Dashboard",
  subTitle: "Admin Dashboard",
  message: "hello admin",
};
export default function AdminDashboard() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Breadcrumb />
    </MainLayout>
  );
}
