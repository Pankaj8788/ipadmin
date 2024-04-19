import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import SMSLogs from "../Components/Admin/SMSLogs";

const data = {
  heading: "SMS Logs",
  title: "Dashboard",
  subTitle: "SMS Logs",
  message: "Hello,Admin",
};
export default function smslogs() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SMSLogs />
    </MainLayout>
  );
}
