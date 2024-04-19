import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import OpeningClosingReport from "../Components/OtherReports/OpeningClosingReport";

const data = {
  heading: "Opening Closing Report MAIN",
  title: "Dashboard",
  subTitle: "Opening Closing Report MAIN",
  message: "Hello,Admin",
};
export default function Ppeningclosingreportmain() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <OpeningClosingReport />
    </MainLayout>
  );
}
