import Pendings_2 from "@/src/Components/report/TransactionHistory";
import AdminHeader from "@/src/Components/commonComponents/AdminHeader";
import MainLayout from "@/src/layouts/MainLayout";
import React from "react";

const data = {
  heading: "Transaction History",
  title: "Dashboard",
  subTitle: "Transaction History",
  message: "Hello,Admin",
};
export default function pendings_2() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Pendings_2 />
    </MainLayout>
  );
}
