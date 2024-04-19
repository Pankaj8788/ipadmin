import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainPaymentSummary from "../Components/report/MainPaymentSummary";

const data = {
  heading: "MAIN Payment Summary",
  title: "Dashboard",
  subTitle: "MAIN Payment Summary",
  message: "Hello,Admin",
};
export default function mainpaymentsummary() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MainPaymentSummary />
    </MainLayout>
  );
}
