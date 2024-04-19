import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import AssignParentUser from "../Components/Users/AssignParentUser";

const data = {
  heading: "Assign Parent User",
  title: "Dashboard",
  subTitle: "Assign Parent User",
  message: "Hello,Admin",
};
export default function Assignparentuserr() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <AssignParentUser />
    </MainLayout>
  );
}
