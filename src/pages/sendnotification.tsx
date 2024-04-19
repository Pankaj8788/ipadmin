import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import SendNotification from "../Components/Admin/SendNotification";

const data = {
  heading: "Send Notification",
  title: "Dashboard",
  subTitle: "Send Notification",
  message: "Hello,Admin",
};
export default function sendnotification() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SendNotification />
    </MainLayout>
  );
}
