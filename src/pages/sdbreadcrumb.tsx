import React from "react";
import MainLayout from "../layouts/MainLayout";
import SDBreadcrumb from "../Components/Users/superdistributor/SDBreadcrumb";
import AdminHeader from "../Components/commonComponents/AdminHeader";

const data = {
  heading: "Super Distributor Dashboard",
  title: "Dashboard",
  subTitle: "Super Distributor Dashboard",
  message: "hello Super Distributor",
};
export default function sdbreadcrumb() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SDBreadcrumb />
    </MainLayout>
  );
}
