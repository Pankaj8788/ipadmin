import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainPaymentGatewayTwo from "../Components/report/MainPaymentGatewayTwo";

const data = {
  heading: "MAIN Payment Summary Gateway/MATM",
  title: "Dashboard",
  subTitle: "MAIN Payment Summary Gateway",
  message: "Hello,Admin",
};
export default function MainPaymentGateway() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MainPaymentGatewayTwo />
    </MainLayout>
  );
}
