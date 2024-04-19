import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import CircleMasterScreen from "../Components/Admin/CircleMasterScreen";

const data = {
  heading: "Circle Master",
  title: "Dashboard",
  subTitle: "Circle Master",
  message: "Hello,Admin",
};
export default function circlemasterscreenn() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CircleMasterScreen />
    </MainLayout>
  );
}
