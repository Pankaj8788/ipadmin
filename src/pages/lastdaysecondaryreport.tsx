import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import LastDaySecReport from "../Components/OtherReports/LastDaySecReport";

const data = {
  heading: "Last 3 Days Secondary Report",
  title: "Dashboard",
  subTitle: "Last 3 Days Secondary Report",
  message: "Hello,Admin",
};
export default function lastdaysecreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <LastDaySecReport />
    </MainLayout>
  );
}
