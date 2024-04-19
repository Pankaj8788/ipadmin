import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminMdList from "../Components/Users/admin/AdminMdList";

export default function adminmdlist() {
  return (
    <MainLayout>
      <AdminMdList />
    </MainLayout>
  );
}
