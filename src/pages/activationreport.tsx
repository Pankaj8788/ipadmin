import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import ActivationReport from "../Components/report/ActivationReport";

const data = {
  heading: "New Activations Report",
  title: "Dashboard",
  subTitle: "New Activations Report",
  message: "Hello,Admin",
};
export default function () {
  return (
    <div>
      <MainLayout>
        <AdminHeader data={data} />
        <ActivationReport />
      </MainLayout>
    </div>
  );
}
