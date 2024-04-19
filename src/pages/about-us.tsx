import React from "react";
import WebLayOut from "../layouts/WebLayOut";
import Breadcrumb from "../Components/website/about/Breadcrumb";
import HeroSection from "../Components/website/about/HeroSection";
import ContainSection from "../Components/website/about/ContainSection";

export default function AboutUs() {
  return (
    <WebLayOut>
      <Breadcrumb />
      <HeroSection />
      <ContainSection />
    </WebLayOut>
  );
}
