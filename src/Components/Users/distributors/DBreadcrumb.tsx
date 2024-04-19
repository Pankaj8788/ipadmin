import { adminImg } from "@/src/Assets/admin";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DBreadcrumb() {
  const [data, setData] = useState<any>();
  const [data1, setData1] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        const response = await axios.get(
          "http://localhost:5000/api/protected/balance",
          {
            headers: headers,
          }
        );

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="w-full main-container h-full flex flex-col items-start justify-start gap-4 mb-8">
      <div className="w-full h-[70%] flex items-center justify-between gap-4 ">
        {/* <div className="w-full h-full rounded-3xl bg-gradient-to-r from-[#6916F2] to-[#566BD5] shadow-[0_10px_20px_rgba(00,00,00)] flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold capitalize text-white ">
            Virtual Money
          </h1>
          <h1 className="text-2xl font-bold capitalize text-white ">
            {data?.vmbalance} &#x20B9;
          </h1>
        </div> */}
        <div className="w-full h-full rounded-3xl bg-gradient-to-r from-[#C420ED] to-[#6C45BF] shadow-[0_10px_20px_rgba(00,00,00)] flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold capitalize text-white ">
            Wallet Balance
          </h1>
          <h1 className="text-2xl font-bold capitalize text-white ">
            {data?.balance} &#x20B9;
          </h1>
        </div>
      </div>
      <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(00,00,00)]">
        <img src={adminImg.src} alt="" className="w-full h-full object-fill" />
      </div>
    </section>
  );
}
