import React from "react";
import WebLayOut from "../layouts/WebLayOut";
import BreadCrumb from "../Components/website/services/BreadCrumb";
import UtilityServices from "../Components/website/services/UtilityServices";
import InsuaranceServices from "../Components/website/services/InsuaranceServices";
import BillServices from "../Components/website/services/BillServices";
import TravelServices from "../Components/website/services/TravelServices";

export default function services() {
  return (
    <WebLayOut>
      <BreadCrumb />
      <TravelServices />
      <UtilityServices />
      <InsuaranceServices />
      <BillServices />
    </WebLayOut>
  );
}
