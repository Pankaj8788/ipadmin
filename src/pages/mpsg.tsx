import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Mpsg from "../Components/report/Mpsg";

const data = {
  heading: "MAIN Payment Summary Gateway",
  title: "Dashboard",
  subTitle: "MAIN Payment Summary Gateway",
  message: "Hello,Admin",
};
export default function masterDistributor() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Mpsg />
    </MainLayout>
  );
}
