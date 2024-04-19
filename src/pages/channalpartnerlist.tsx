import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import ChannalPartnerList from "../Components/Users/channalPartner/ChannalPartnerList";

const data = {
  heading: "Channel Partner List",
  title: "Dashboard",
  subTitle: "Channel Partner List",
  message: "Hello,Admin",
};
export default function channalpartnerlist() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <ChannalPartnerList />
    </MainLayout>
  );
}
