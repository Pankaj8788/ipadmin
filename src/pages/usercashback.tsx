import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainLayout from "../layouts/MainLayout";
import UserCashback from "../Components/report/UserCashback";

const data = {
  heading: " User Cashback Report",
  title: "Dashboard",
  subTitle: "User Cashback Report",
  message: "Hello,Admin",
};
export default function () {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <UserCashback />
    </MainLayout>
  );
}
