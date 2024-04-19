import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import StatusChangeReport from "../Components/OtherReports/StatusChangeReport";

const data = {
  heading: "Status Change Report",
  title: "Dashboard",
  subTitle: "Status Change Report",
  message: "Hello admin",
};
export default function statuschangereport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <StatusChangeReport />
    </MainLayout>
  );
}
