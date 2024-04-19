import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import BalanceRequests from "../Components/report/BalanceRequests";

const data = {
  heading: "Payment Requests",
  title: "Dashboard",
  subTitle: "Payment Requests",
  message: "Hello,Admin",
};
export default function balancerequests() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <BalanceRequests />
    </MainLayout>
  );
}
