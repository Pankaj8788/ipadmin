import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainLayout from "../layouts/MainLayout";
import RefundSucessStory from "../Components/OtherReports/RefundSucessStory";

const data = {
  heading: "Refund Success Report",
  title: "Dashboard",
  subTitle: "Refund Success Report",
  message: "Hello admin",
};
export default function refundsucessstory() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <RefundSucessStory />
    </MainLayout>
  );
}
