import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import KycVerification from "../Components/Users/KycVerification";

const data = {
  heading: "KYC Verification",
  title: "Dashboard",
  subTitle: "KYC Verification",
  message: "Hello,Admin",
};
export default function kycverificationn() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <KycVerification />
    </MainLayout>
  );
}
