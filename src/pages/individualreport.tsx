import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import IndividualReport from "../Components/OtherReports/IndividualReport";

const data = {
  heading: "Individual Report",
  title: "Dashboard",
  subTitle: "Individual Report",
  message: "hello admin",
};
export default function individualreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <IndividualReport />
    </MainLayout>
  );
}
