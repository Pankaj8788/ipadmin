import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import ProviderTypes from "../Components/Admin/ProviderTypes";

const data = {
  heading: "Provider Types",
  title: "Dashboard",
  subTitle: "Provider Types",
  message: "Hello,Admin",
};
export default function providertypescreen() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <ProviderTypes />
    </MainLayout>
  );
}
