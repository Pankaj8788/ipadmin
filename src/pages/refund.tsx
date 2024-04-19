import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Refund from "../Components/report/Refund";

const data = {
  heading: "Refunds",
  title: "Dashboard",
  subTitle: "Refunds",
  message: "Hello,Admin",
};

export default function refund() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Refund />
    </MainLayout>
  );
}
