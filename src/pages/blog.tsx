import React from "react";
import MainLayout from "../layouts/MainLayout";
import WebLayOut from "../layouts/WebLayOut";
import BreadCrumb from "../Components/website/blogs/BreadCrumbBlog";
import BreadCrumbBlog from "../Components/website/blogs/BreadCrumbBlog";
import Blog from "../Components/website/blogs/Blog";

export default function blog() {
  return (
    <WebLayOut>
      <BreadCrumbBlog />
      <Blog />
    </WebLayOut>
  );
}
