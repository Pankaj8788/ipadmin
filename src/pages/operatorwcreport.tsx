import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import OperatorWCReport from "../Components/OtherReports/OperatorWCReport";

const data = {
  heading: "Operator wise commision report",
  title: "Dashboard",
  subTitle: " Operator wise commision report",
  message: "Hello,Admin",
};
export default function operatorwcreport() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <OperatorWCReport />
    </MainLayout>
  );
}
