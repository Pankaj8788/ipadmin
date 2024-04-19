import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AddChannalPartner from "../Components/Users/channalPartner/AddChannalPartner";
import ChannalPartnerList from "../Components/Users/channalPartner/ChannalPartnerList";

const data = {
  heading: "Register Channal Partner",
  title: "Dashboard",
  subTitle: "Register Channal Partner",
  message: "Hello Admin",
};
export default function addchannalpartner() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AddChannalPartner />
    </MainLayout>
  );
}
