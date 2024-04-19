import { contain1, contain2, contain3, contain4 } from "@/src/Assets/about";
import {
  Forbes,
  Grop,
  Quartzlogo,
  TechCrunch,
  cnbc,
  blog1,
  blog2,
  blog3,
  homeimg1,
  homeimg2,
  imockup1,
  imockup2,
  imockup3,
} from "@/src/Assets/home";
import { blogArrType, heroArrType, homeArrType } from "@/src/types";

export const heroArr: heroArrType[] = [
  {
    id: 1,
    title: "OR Transfer;",
    subTitle: "a piece of cake",
    img: imockup1,
  },
  {
    id: 2,
    title: "Access to transactions",
    subTitle: "detail in a second",
    img: imockup2,
  },
  {
    id: 3,
    title: "Control card spend,",
    subTitle: "before it happens",
    img: imockup3,
  },
];

export const homeArr: homeArrType[] = [
  {
    id: 1,
    title: "MISSION",
    subTitle:
      "To revolutionize and enhance the financial landscape by leveraging cutting-edge technology to provide accessible, efficient, and secure financial services, empowering individuals and businesses to manage their finances seamlessly.",
    subTitle2:
      "Pioneer financial evolution through technology, offering bespoke solutions that transcend traditional boundaries. Our mission is to redefine financial experiences, fostering inclusivity, security, and prosperity in an ever-evolving digital landscape.",
    img: homeimg1,
  },
  {
    id: 2,
    title: "VISION",
    subTitle:
      "To be a global leader in driving financial inclusion, innovation, and trust through technology, creating a future where financial services are not only advanced and convenient but also contribute to the economic well-being of diverse communities.",
    subTitle2:
      " To lead globally in shaping a financial landscape where cutting-edge technology not only advances convenience but becomes a catalyst for economic empowerment, fostering prosperity and inclusivity across diverse communities.",
    img: homeimg2,
  },
];

export const blogArr: blogArrType[] = [
  {
    id: 1,
    title: "NexFin Visions ",
    date: "19 February 2024",
    img: blog1,
  },
  {
    id: 2,
    title: "Fintech Finance. ",
    date: "9 April 2024",
    img: blog2,
  },
  {
    id: 3,
    title: "ATM Marketplace ",
    date: "10 Nov 2024",
    img: blog3,
  },
  {
    id: 4,
    title: "Finovate ",
    date: "19 February 2024",
    img: blog1,
  },
  {
    id: 5,
    title: "TechBullion ",
    date: "9 April 2024",
    img: blog2,
  },
];

export const clientArr = [
  {
    id: 1,
    img: Quartzlogo,
  },
  {
    id: 2,
    img: Grop,
  },
  {
    id: 3,
    img: Forbes,
  },
  {
    id: 4,
    img: cnbc,
  },
  {
    id: 5,
    img: TechCrunch,
  },
];

export const containArr = [
  {
    id: 1,
    title1: "COUNTRIES",
    title2: "47+",
    img: contain1,
  },
  {
    id: 2,
    title1: "CLIENTS",
    title2: "110+",
    img: contain2,
  },
  {
    id: 3,
    title1: "PROJECTS",
    title2: "250+",
    img: contain3,
  },
  {
    id: 4,
    title1: "TEAM MEMBERS",
    title2: "30+",
    img: contain4,
  },
];

export const aboutArr = [{}];
