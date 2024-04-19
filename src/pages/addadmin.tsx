import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AddAdmin from "../Components/Admin/AddAdmin";

const data = {
  heading: "Add Admin Balance",
  title: "Dashboard",
  subTitle: "Add Admin Balance",
  message: "Hello,Admin",
};
export default function addadmin() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddAdmin />
    </MainLayout>
  );
}
