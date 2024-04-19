import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import MainLayout from "../layouts/MainLayout";
import SuperDistList from "../Components/Users/superdistributor/SuperDistList";

const data = {
  heading: "Super Distributor List",
  title: "Dashboard",
  subTitle: "Super Distributor List",
  message: "Hello,Admin",
};
export default function superdistrilist() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SuperDistList />
    </MainLayout>
  );
}
