import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminCpList from "../Components/Users/admin/AdminCpList";

export default function admincplist() {
  return (
    <MainLayout>
      <AdminCpList />
    </MainLayout>
  );
}
