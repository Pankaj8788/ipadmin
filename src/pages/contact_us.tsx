import React from "react";
import WebLayOut from "../layouts/WebLayOut";
import BreadCrumbContact from "../Components/website/contact_us/BreadCrumbContact";
import HomeContact from "../Components/website/contact_us/HomeContact";

export default function Contactt_us() {
  return (
    <WebLayOut>
      <HomeContact />
      <BreadCrumbContact />
    </WebLayOut>
  );
}
