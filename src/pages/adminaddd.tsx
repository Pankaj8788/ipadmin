import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminAddD from "../Components/Users/admin/AdminAddD";

const data = {
  heading: "Admin",
  title: "Dashboard",
  subTitle: "Admin",
  message: "Hello,Admin",
};
export default function adminaddd() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AdminAddD />
    </MainLayout>
  );
}
