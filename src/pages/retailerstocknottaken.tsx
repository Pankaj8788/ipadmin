import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import RetailerStockNotTaken from "../Components/OtherReports/RetailerStockNotTaken";

const data = {
  heading: "Retailers Stock Not Taken",
  title: "Dashboard",
  subTitle: "Retailers Stock Not Taken",
  message: "Hello admin",
};
export default function retailerstocknottaken() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <RetailerStockNotTaken />
    </MainLayout>
  );
}
