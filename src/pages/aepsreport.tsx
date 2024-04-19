import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AEPSReport from "../Components/OtherReports/AEPSReport";

const data = {
  heading: "AEPS Report",
  title: "Dashboard",
  subTitle: "AEPS Report",
  message: "Hello,Admin",
};
export default function aepsreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AEPSReport />
    </MainLayout>
  );
}
