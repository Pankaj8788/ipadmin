import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import DBreadcrumb from "../Components/Users/distributors/DBreadcrumb";

const data = {
  heading: "Distributor Dashboard",
  title: "Dashboard",
  subTitle: "Distributor Dashboard",
  message: "hello Distributor",
};
export default function dbreadcrumb() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <DBreadcrumb />
    </MainLayout>
  );
}
