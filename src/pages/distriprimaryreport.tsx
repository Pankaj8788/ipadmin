import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import DistriPrimaryReport from "../Components/report/DistriPrimaryReport";

const data = {
  heading: "Distributor Activation Report",
  title: "Dashboard",
  subTitle: "Distributor Activation Report",
  message: "Hello,Admin",
};

export default function distriprimaryreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <DistriPrimaryReport />
    </MainLayout>
  );
}
