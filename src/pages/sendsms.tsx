import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import SendSMS from "../Components/Admin/SendSMS";

const data = {
  heading: "Send SMS",
  title: "Dashboard",
  subTitle: "Send SMS",
  message: "Hello,Admin",
};
export default function sendsms() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SendSMS />
    </MainLayout>
  );
}
