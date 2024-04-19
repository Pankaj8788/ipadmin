import Pendings from "@/src/Components/report/Pendings";
import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";

const data = {
  heading: "Pendings",
  title: "Dashboard",
  subTitle: "Pendings",
  message: "Hello,Admin",
};
export default function pendings() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Pendings />
    </MainLayout>
  );
}
