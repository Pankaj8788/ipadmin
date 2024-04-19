import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AdminListR from "../Components/Users/admin/AdminListR";

export default function adminrlist() {
  return (
    <MainLayout>
      <AdminListR />
    </MainLayout>
  );
}
