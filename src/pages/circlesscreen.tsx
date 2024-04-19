import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import { Circle } from "@mui/icons-material";
import Circles from "../Components/Admin/Circles";

const data = {
  heading: "Circles",
  title: "Dashboard",
  subTitle: "Circles",
  message: "Hello,Admin",
};
export default function circlesscreen() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <Circles />
    </MainLayout>
  );
}
