import AddMainBalance from "@/src/Components/balance/AddMainBalance";
import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";

const data = {
  heading: "MAIN Amount Transfer",
  title: "Dashboard",
  subTitle: "MAIN Amount Transfer",
  message: "Hello,admin",
};
export default function addmainbalance() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddMainBalance />
    </MainLayout>
  );
}
