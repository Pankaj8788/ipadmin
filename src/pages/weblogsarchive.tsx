import MainLayout from "@/src/layouts/MainLayout";
import React from "react";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import WebLogsArchive from "../Components/Admin/WebLogsArchive";

const data = {
  heading: "Logs Archive",
  title: "Dashboard",
  subTitle: "Logs Archive",
  message: "hello admin",
};
export default function () {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <WebLogsArchive />
    </MainLayout>
  );
}
