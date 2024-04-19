import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminAddmd from "../Components/Users/admin/AdminAddmd";

const data = {
  heading: "Admin",
  title: "Dashboard",
  subTitle: "Admin",
  message: "Hello,Admin",
};
export default function adminaddmd() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AdminAddmd />
    </MainLayout>
  );
}
