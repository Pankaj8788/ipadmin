import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import CommissionDistriReport from "../Components/OtherReports/CommissionDistriReport";

const data = {
  heading: "Commission Distribution Report",
  title: "Dashboard",
  subTitle: "Commission Distribution Report",
  message: "Hello,Admin",
};
export default function Comissiondistribreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CommissionDistriReport />
    </MainLayout>
  );
}
