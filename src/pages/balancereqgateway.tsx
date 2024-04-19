import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import BalanceReqGateway from "../Components/report/BalanceReqGateway";

const data = {
  heading: "Payment Requests",
  title: "Dashboard",
  subTitle: "Payment Requests",
  message: "Hello,Admin",
};
export default function balancereqgateway() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <BalanceReqGateway />
    </MainLayout>
  );
}
