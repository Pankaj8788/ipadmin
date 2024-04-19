import React from "react";
import MainLayout from "../layouts/MainLayout";
import CPBreadcrumb from "../Components/Users/channalPartner/CPBreadcrumb";
import AdminHeader from "../Components/commonComponents/AdminHeader";
const data = {
  heading: "channel partner Dashboard",
  title: "Dashboard",
  subTitle: "channel partner Dashboard",
  message: "hello channel partner",
};
export default function cpbreadcrumb() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CPBreadcrumb />
    </MainLayout>
  );
}
