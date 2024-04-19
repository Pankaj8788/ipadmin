import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AddMasterDistributor from "../Components/Users/masterDistributor/AddMasterDistributor";

const data = {
  heading: "Register Master Distributer",
  title: "Dashboard",
  subTitle: "Register Master Distributer",
  message: "Hello Admin",
};
export default function addmasterdistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddMasterDistributor />
    </MainLayout>
  );
}
