import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import WebsiteLogsScreen from "../Components/Admin/WebsiteLogsScreen";

const data = {
  heading: "Website Logs",
  title: "Dashboard",
  subTitle: "Website Logs",
  message: "Hello,Admin",
};
export default function () {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <WebsiteLogsScreen />
    </MainLayout>
  );
}
