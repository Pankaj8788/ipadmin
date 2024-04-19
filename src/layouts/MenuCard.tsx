import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";
import AnotherCard from "./AnotherCard";
import { useRouter } from "next/router";
export default function MenuCard({ item, index }: any) {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [open, setOpen] = useState<any>(false);
  const router = useRouter();
  return (
    <>
      <span
        className={`w-full p-2 flex cursor-pointer items-center justify-between rounded-md ${
          activeIndex === item.id ? "bg-[#1359DD]" : "!bg-transparent"
        } `}
        key={item.id}
        onClick={() => {
          setActiveIndex(item.id);
          setOpen(!open);
          {
            !item.subMenu && router.push(`${item.path}`);
          }
        }}
      >
        <span className="w-full flex items-center justify-start gap-3">
          {item.icon}
          <p className="text-white font-semibold text-lg capitalize">
            {item.title}
          </p>
        </span>
        {item.subMenu && (
          <span className=" flex items-center justify-end">
            <ArrowDropDownIcon className="!text-white" />
          </span>
        )}
      </span>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.subMenu &&
          item.subMenu.map((innerItem: any) => (
            <>
              <AnotherCard innerItem={innerItem} />
            </>
          ))}
      </Collapse>
    </>
  );
}
