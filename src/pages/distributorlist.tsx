import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import DistributorList from "../Components/Users/distributors/DistributorList";

const data = {
  heading: "Distributors List",
  title: "Dashboard",
  subTitle: "Distributors List",
  message: "Hello,Admin",
};
export default function distributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <DistributorList />
    </MainLayout>
  );
}
