import React, { ReactElement } from "react";
import MainHeader from "./MainHeader";
import Mainfooter from "./Mainfooter";
type prop = {
  title?: string;
  children: ReactElement | ReactElement[];
};
export default function WebLayOut({ children, title = "" }: prop) {
  return (
    <>
      <MainHeader />
      <>{children}</>
      <Mainfooter />
    </>
  );
}
