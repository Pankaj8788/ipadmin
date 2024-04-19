import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AddSuperDistributor from "../Components/Users/superdistributor/AddSuperDistributor";

const data = {
  heading: "Register Super Distributor",
  title: "Dashboard",
  subTitle: "Register Super Distributor",
  message: "Hello Admin",
};
export default function addsuperdistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddSuperDistributor />
    </MainLayout>
  );
}
