import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import RetailerSaleNotDone from "../Components/OtherReports/RetailerSaleNotDone";

const data = {
  heading: "Retailers Sale Not Done",
  title: "Dashboard",
  subTitle: "Retailers Sale Not Done",
  message: "Hello admin",
};
export default function retailersalenotdone() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <RetailerSaleNotDone />
    </MainLayout>
  );
}
