import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Notice from "../Components/Admin/Notice";

const data = {
  heading: "Notice",
  title: "Dashboard",
  subTitle: "Notice",
  message: "Hello,Admin",
};
export default function notice() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Notice />
    </MainLayout>
  );
}
