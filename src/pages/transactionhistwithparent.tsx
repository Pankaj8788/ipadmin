import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import TransactionHistWithParent from "../Components/report/TransactionHistWithParent";

const data = {
  heading: "Transaction History With Parent",
  title: "Dashboard",
  subTitle: "Transaction History With Parent",
  message: "Hello,Admin",
};
export default function transactionhistwithparent() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <TransactionHistWithParent />
    </MainLayout>
  );
}
