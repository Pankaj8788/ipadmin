import React from "react";
import WebLayOut from "../layouts/WebLayOut";
import BreadCrumbCareer from "../Components/website/career/BreadCrumbCareer";
import HomeCareer from "../Components/website/career/HomeCareer";
import WhyCareer from "../Components/website/career/WhyCareer";
import JoinUsCareer from "../Components/website/career/JoinUsCareer";

export default function career() {
  return (
    <WebLayOut>
      <JoinUsCareer />
      <BreadCrumbCareer />
      <WhyCareer />
      <HomeCareer />
    </WebLayOut>
  );
}
