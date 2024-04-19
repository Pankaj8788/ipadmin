import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import RBreadcrumb from "../Components/Users/retailers/RBreadcrumb";

const data = {
  heading: "Retailer Dashboard",
  title: "Dashboard",
  subTitle: "Retailer Dashboard",
  message: "hello Retailer",
};
export default function rbreadcrumb() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <RBreadcrumb />
    </MainLayout>
  );
}
