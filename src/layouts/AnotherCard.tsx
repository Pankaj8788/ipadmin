import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";
import { useRouter } from "next/router";
export default function AnotherCard({ innerItem }: any) {
  const [innerOpen, setInnerOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <span
        className="w-full cursor-pointer flex items-center justify-between p-2 border-b bg-[#1D1D42] z-[999]"
        key={innerItem.id}
        onClick={() => {
          setInnerOpen(!innerOpen);
          {
            !innerItem.ultraSubMenu && router.push(`${innerItem.path}`);
          }
        }}
      >
        <p className="text-white font-semibold">{innerItem.subTitle}</p>
        {innerItem.ultraSubMenu && (
          <ArrowDropDownIcon className="!text-white" />
        )}
      </span>
      <Collapse in={innerOpen} timeout="auto" unmountOnExit>
        {innerItem.ultraSubMenu &&
          innerItem.ultraSubMenu.map((val: any) => (
            <span
              className="w-full cursor-pointer p-2 flex items-center justify-between border-b bg-[#1D1D42] z-[999]"
              key={val.id}
              onClick={() => {
                router.push(`${val.path}`);
              }}
            >
              <p className="text-white font-semibold">{val?.subTitle}</p>
            </span>
          ))}
      </Collapse>
    </>
  );
}
