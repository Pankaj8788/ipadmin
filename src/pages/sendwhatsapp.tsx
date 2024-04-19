import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import SendWhatsapp from "../Components/Admin/SendWhatsapp";

const data = {
  heading: "Send WhatsApp",
  title: "Dashboard",
  subTitle: "Send WhatsApp",
  message: "Hello,Admin",
};
export default function sendwhatsapp() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SendWhatsapp />
    </MainLayout>
  );
}
