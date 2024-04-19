import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import UserWiseReport from "../Components/OtherReports/UserWiseReport";

const data = {
  heading: "User Wise Report",
  title: "Dashboard",
  subTitle: "User Wise Report",
  message: "Hello,Admin",
};
export default function () {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <UserWiseReport />
    </MainLayout>
  );
}
