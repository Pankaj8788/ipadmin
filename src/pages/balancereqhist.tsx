import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import BalanceReqHist from "../Components/report/BalanceReqHist";

const data = {
  heading: "Payment Requests",
  title: "Dashboard",
  subTitle: "Payment Requests",
  message: "Hello,Admin",
};
export default function balancereqhist() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <BalanceReqHist />
    </MainLayout>
  );
}
