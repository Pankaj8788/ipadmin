import CreatePackage from "@/src/Components/commission/CreatePackage";
import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";
const data = {
  heading: "create commission pay",
  title: "dashboard",
  subTitle: "create commission pay",
  message: "Hello Admin",
};
export default function commissionpay() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CreatePackage />
    </MainLayout>
  );
}
