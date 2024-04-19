import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminDList from "../Components/Users/admin/AdminDList";

export default function admindlist() {
  return (
    <MainLayout>
      <AdminDList />
    </MainLayout>
  );
}
