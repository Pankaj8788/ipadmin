import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainLayout from "../layouts/MainLayout";
import PaymentRequestPage from "../Components/report/PaymentRequest";

const data = {
  heading: "Payment Requests",
  title: "Dashboard",
  subTitle: " Payment Requests",
  message: "Hello,Admin",
};
export default function PaymentRequest() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <PaymentRequestPage />
    </MainLayout>
  );
}
