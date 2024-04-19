import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminSdList from "../Components/Users/admin/AdminSdList";
import AdminHeader from "../Components/commonComponents/AdminHeader";

export default function adminsdlist() {
  return (
    <MainLayout>
      <AdminSdList />
    </MainLayout>
  );
}
