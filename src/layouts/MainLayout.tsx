import React, { ReactElement } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Head from "next/head";
import { MainLogo, RockkpayLogo } from "../Assets/navbar";
type prop = {
  title?: string;
  children: ReactElement | ReactElement[];
};
export default function MainLayout({ children, title = "ipaisa" }: prop) {
  const check = localStorage.getItem("navData");
  return (
    <>
      <Head>
        <meta property="og:image" content={RockkpayLogo.src} />
        <title>{title}</title>
        <link rel="icon" href="mainLogo.png" />
      </Head>
      <section className="w-full flex items-start justify-start !overflow-hidden sticky top-0 ">
        <div className="w-fit">
          <Sidebar />
        </div>
        <div className="w-full ">
          <Header />
          <div
            className={` w-full h-[calc(100vh-4rem)] overflow-y-scroll barOne ${
              check == "Admin" &&
              "bg-gradient-to-tr from-[#a0a7e2] to-[#343f97]"
            } ${
              check == "Channel_Partner" &&
              "bg-gradient-to-tr from-[#81cda9] to-[#054426]"
            } ${
              check == "Super_Distributor" &&
              "bg-gradient-to-tr from-[#fae9dd] to-[#ff8831]"
            } ${
              check == "Master_Distributor" &&
              "bg-gradient-to-tr from-[#c2a8f5] to-[#5e17eb]"
            } ${
              check == "Distributor" &&
              "bg-gradient-to-tr from-[#c0cafa] to-[#5271ff]"
            } ${
              check == "Retailer" &&
              "bg-gradient-to-tr from-[#cef7fa] to-[#55f5ff]"
            } `}
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
