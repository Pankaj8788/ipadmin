import React from "react";
import WebLayOut from "../layouts/WebLayOut";
import Breadcrumb from "../Components/website/about_us/Breadcrumb";
import ContainSection from "../Components/website/about_us/ContainSection";
import OurTeam from "../Components/website/about_us/OurTeam";
import TechTeam from "../Components/website/about_us/TechTeam";
import OperationTeam from "../Components/website/about_us/OperationTeam";

export default function aboutus2() {
  return (
    <WebLayOut>
      <Breadcrumb />
      <ContainSection />
      <OurTeam />
      <TechTeam />
      <OperationTeam />
    </WebLayOut>
  );
}
