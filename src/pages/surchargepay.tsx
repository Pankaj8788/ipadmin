import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import SurchargePay from "../Components/commission/SurchargePay";

const data = {
  heading: "Surcharge Pay",
  title: "Dashboard",
  subTitle: "Surcharge Pay",
  message: "Hello,Admin",
};
export default function surchargepay() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <SurchargePay />
    </MainLayout>
  );
}
