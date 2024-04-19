import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MTR from "../Components/OtherReports/MTR";

const data = {
  heading: "Money Transfer Report",
  title: "Dashboard",
  subTitle: "MTR",
  message: "Hello,Admin",
};
export default function moneytransferreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MTR />
    </MainLayout>
  );
}
