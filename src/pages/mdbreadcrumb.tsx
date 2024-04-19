import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MDBreadcrumb from "../Components/Users/masterDistributor/MDBreadcrumb";

const data = {
  heading: "Master Distributor Dashboard",
  title: "Dashboard",
  subTitle: "Master Distributor Dashboard",
  message: "hello Master Distributor",
};
export default function mdbreadcrumb() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MDBreadcrumb />
    </MainLayout>
  );
}
