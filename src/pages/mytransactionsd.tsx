import React from "react";
import MainLayout from "../layouts/MainLayout";
import MyTransactionCp from "../Components/Users/channalPartner/MyTransactionCp";
import MyTransactionSd from "../Components/Users/superdistributor/MyTransactionSd";

export default function mytransactionsd() {
  return (
    <MainLayout>
      <MyTransactionSd />
    </MainLayout>
  );
}
