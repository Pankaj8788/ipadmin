import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import ComplaintHistory from "../Components/report/ComplaintHistory";

const data = {
  heading: "Refund Requests",
  title: "Dashboard",
  subTitle: "Refund Requests",
  message: "Hello,Admin",
};
export default function () {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <ComplaintHistory />
    </MainLayout>
  );
}
