import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainPaymentSummaryAepsMatm from "../Components/report/MainPaymentSummaryAepsMatm";

const data = {
  heading: "MAIN Payment Summary Gateway/MATM",
  title: "Dashboard",
  subTitle: "MAIN Payment Summary Gateway/MATM",
  message: "Hello,Admin",
};
export default function mainpaymentsummaryaepsmatm() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MainPaymentSummaryAepsMatm />
    </MainLayout>
  );
}
