import React from "react";
import MainLayout from "../layouts/MainLayout";
import AdminHeader from "../Components/commonComponents/AdminHeader";
import UserSaleDone from "../Components/OtherReports/UserSaleDone";

const data = {
  heading: "Users Sale Done",
  title: "Dashboard",
  subTitle: "Users Sale Done",
  message: "Hello admin",
};
export default function usersaledone() {
  return (
    <MainLayout>
      <AdminHeader data={data} />
      <UserSaleDone />
    </MainLayout>
  );
}
