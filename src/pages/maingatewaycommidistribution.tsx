import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainGatewayCommidistri from "../Components/report/MainGatewayCommidistri";

const data = {
  heading: "MAIN Payment Summary Gateway",
  title: "Dashboard",
  subTitle: "MAIN Payment Summary Gateway",
  message: "Hello,Admin",
};
export default function maingatewaycommidistri() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MainGatewayCommidistri />
    </MainLayout>
  );
}
