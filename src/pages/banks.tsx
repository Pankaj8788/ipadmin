import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Banks from "../Components/Admin/Banks";

const data = {
  heading: "Banks",
  title: "Dashboard",
  subTitle: "Banks",
  message: "Hello,Admin",
};
export default function banks() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Banks />
    </MainLayout>
  );
}
