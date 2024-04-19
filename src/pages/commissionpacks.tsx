import { CommissionPacksPage } from "@/src/Components/commission/CommissionPacksPage";
import CreatePackage from "@/src/Components/commission/CreatePackage";
import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";
const data = {
  heading: "create commission pack",
  title: "dashboard",
  subTitle: "create commission pack",
};
export default function CommissionPacks() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <CommissionPacksPage />
    </MainLayout>
  );
}
