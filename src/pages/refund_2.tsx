import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import Refund_2 from "../Components/report/Refund_2";

const data = {
  heading: "Refund Requests",
  title: "Dashboard",
  subTitle: "Refund Requests",
  message: "Hello,Admin",
};
export default function refund_2() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Refund_2 />
    </MainLayout>
  );
}
