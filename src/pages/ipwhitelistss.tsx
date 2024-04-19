import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import IPwhitelistscreen from "../Components/Admin/IPwhitelistscreen";

const data = {
  heading: "IP Whitelist",
  title: "Dashboard",
  subTitle: "IP Whitelist",
  message: "Hello,Admin",
};
export default function ipwhitelistscreen() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <IPwhitelistscreen />
    </MainLayout>
  );
}
