import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainLayout from "../layouts/MainLayout";
import AddDistributorPage from "../Components/Users/distributors/AddDistributorPage";

const data = {
  heading: "Register Distributor",
  title: "Dashboard",
  subTitle: "Register Distributor",
  message: "Hello Admin",
};
export default function Adddistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddDistributorPage />
    </MainLayout>
  );
}
