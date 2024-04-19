import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import MasterDistributorList from "@/src/Components/Users/masterDistributor/MasterDistributorList";

import React from "react";

const data = {
  heading: "Master Distributor list",
  title: "Dashboard",
  subTitle: "Master Distributor List",
  message: "Hello,Admin",
};
export default function masterDistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <MasterDistributorList />
    </MainLayout>
  );
}
