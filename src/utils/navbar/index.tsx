import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { menuArrType, sidebarArrType } from "@/src/types";
// export const sidebarArr: sidebarArrType[] = [
//   {
//     id: 1,
//     title: "dashboard",
//     icon: <DashboardIcon className="!text-white" />,
//   },
//   {
//     id: 2,
//     title: "commission",
//     icon: <CurrencyExchangeIcon className="!text-white" />,
//   },
//   {
//     id: 3,
//     title: "API",
//     icon: <VerifiedUserIcon className="!text-white" />,
//   },
//   {
//     id: 4,
//     title: "user",
//     icon: <SupervisedUserCircleIcon className="!text-white" />,
//   },
//   {
//     id: 5,
//     title: "balance",
//     icon: <CurrencyRupeeIcon className="!text-white" />,
//   },
//   {
//     id: 6,
//     title: "report",
//     icon: <SummarizeIcon className="!text-white" />,
//   },
//   {
//     id: 7,
//     title: "other reports",
//     icon: <BarChartIcon className="!text-white" />,
//   },
//   {
//     id: 8,
//     title: "admin",
//     icon: <PersonOutlineIcon className="!text-white" />,
//   },
//   {
//     id: 9,
//     title: "logout",
//     icon: <LogoutIcon className="!text-white" />,
//   },
// ];

export const sidebarMenuArr: menuArrType[] = [
  {
    id: 1,
    title: "dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: "./admin-dashboard",
  },
  {
    id: 2,
    title: "commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      {
        id: 21,
        subTitle: "Create package",
        path: "./createpack",
      },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Commission packs",
        path: "./commissionpacks",
      },
    ],
  },

  {
    id: 4,
    title: "users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Channal_Partner",
        ultraSubMenu: [
          {
            id: 411,
            subTitle: "Channal Partner List",
            path: "./channalpartnerlist",
          },
          {
            id: 412,
            subTitle: "Add Channal Partner",
            path: "./addchannalpartner",
          },
        ],
      },
      {
        id: 42,
        subTitle: "Super_distributors",
        ultraSubMenu: [
          {
            id: 421,
            subTitle: "Super distributor list",
            path: "./superdistrilist",
          },
          {
            id: 422,
            subTitle: "Add super distributor",
            path: "./addsuperdistributor",
          },
        ],
      },
      {
        id: 43,
        subTitle: "Master_distributors",
        ultraSubMenu: [
          {
            id: 431,
            subTitle: "Master distributor list",
            path: "./masterdistributor",
          },
          {
            id: 432,
            subTitle: "Add master distributor",
            path: "./addmasterdistributor",
          },
        ],
      },
      {
        id: 44,
        subTitle: "Distributors",
        ultraSubMenu: [
          {
            id: 441,
            subTitle: "Distributor list",
            path: "./distributorlist",
          },
          {
            id: 442,
            subTitle: "Add distributor",
            path: "./adddistributor",
          },
        ],
      },
      {
        id: 45,
        subTitle: "Retailers",
        ultraSubMenu: [
          {
            id: 451,
            subTitle: "Retailer list",
            path: "../retailers",
          },
          {
            id: 452,
            subTitle: "Add retailer",
            path: "./addretailer",
          },
        ],
      },
      {
        id: 46,
        subTitle: "Members",
        ultraSubMenu: [
          {
            id: 461,
            subTitle: "Members list",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 47,
        subTitle: "Change parent",
        path: "./assignparentuserr",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./changemobilenumber",
      },
      {
        id: 49,
        subTitle: "KYC verification",
        path: "./kycverificationn",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add MAIN balance",
        path: "./addmainbalance",
      },
      {
        id: 52,
        subTitle: "Reverse MAIN balance",
        path: "./addmainbalance_2",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./easebuzpayment",
      },
    ],
  },
  {
    id: 6,
    title: "report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      {
        id: 62,
        subTitle: "Transaction history",
        path: "./transactionhistory",
      },
      {
        id: 63,
        subTitle: "Transaction history with parent",
        path: "./transactionhistwithparent",
      },

      {
        id: 66,
        subTitle: "Complaints",
        path: "./refund_2",
      },
      {
        id: 67,
        subTitle: "Complaints history",
        path: "./complainthistory",
      },
      {
        id: 68,
        subTitle: "Refunds",
        path: "./refund",
      },
      {
        id: 69,
        subTitle: "Reports",
        path: "./reports",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      {
        id: 73,
        subTitle: "Balance requests",
        path: "./balancerequests",
      },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      {
        id: 75,
        subTitle: "Balance request history",
        path: "./balancereqhist",
      },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      {
        id: 77,
        subTitle: "Activation report",
        path: "./activationreport",
      },
      {
        id: 78,
        subTitle: "User cashback report",
        path: "./usercashback",
      },
    ],
  },
  {
    id: 7,
    title: "other reports",
    icon: <BarChartIcon className="!text-white" />,
    subMenu: [
      {
        id: 71,
        subTitle: "Money transfer reports",
        path: "./moneytransferreport",
      },
      {
        id: 72,
        subTitle: "AEPS report",
        path: "./aepsreport",
      },
      {
        id: 73,
        subTitle: "Operator wise report",
        path: "./comingsoon",
      },
      {
        id: 74,
        subTitle: "User wise report",
        path: "./userwisereport",
      },

      {
        id: 78,
        subTitle: "Individual report",
        path: "./individualreport",
      },
      {
        id: 79,
        subTitle: "Opening closing report MAIN",
        path: "./openingclosingreportmain",
      },
      {
        id: 80,
        subTitle: "Operatorwise commission report",
        path: "./operatorwcreport",
      },
      {
        id: 81,
        subTitle: "Commission distribution report",
        path: "./comissiondistribreport",
      },
      {
        id: 82,
        subTitle: "Refund success report",
        path: "./refundsucessstory",
      },
      {
        id: 83,
        subTitle: "Status change report",
        path: "./statuschangereport",
      },
      {
        id: 84,
        subTitle: "Last 3 days secondary report",
        path: "./lastdaysecondaryreport",
      },
      {
        id: 85,
        subTitle: "Retailers stock not taken",
        path: "./retailerstocknottaken",
      },
      {
        id: 86,
        subTitle: "Retailers sale not done",
        path: "./retailersalenotdone",
      },
      {
        id: 87,
        subTitle: "Users sale done",
        path: "./usersaledone",
      },
    ],
  },
  {
    id: 8,
    title: "admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add admin MAIN balance",
        path: "./addadmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./notice",
      },
      {
        id: 91,
        subTitle: "USER KYC",
        path: "./userkyc",
      },
      {
        id: 92,
        subTitle: "Send sms",
        path: "./sendsms",
      },
      {
        id: 93,
        subTitle: "Send whatsapp",
        path: "./sendwhatsapp",
      },
      {
        id: 94,
        subTitle: "Send email",
        path: "./sendemail",
      },
      {
        id: 95,
        subTitle: "Send notification",
        path: "./sendnotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./setting",
      },
      {
        id: 98,
        subTitle: "Circle master",
        path: "./circlemasterscreenn",
      },
      {
        id: 99,
        subTitle: "Website logs",
        path: "./websitelogsscreen",
      },
      {
        id: 100,
        subTitle: "Website logs archive",
        path: "./weblogsarchive",
      },
      {
        id: 101,
        subTitle: "SMS logs",
        path: "./smslogs",
      },
      {
        id: 102,
        subTitle: "IP whitelist",
        path: "./ipwhitelistss",
      },
      {
        id: 103,
        subTitle: "Provider types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];

export const newSideBarArr = [
  {
    id: 900,
    userType: "Admin",
    bgColorOne: "#a0a7e2",
    bgColorTwo: "#343f97",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./admin-dashboard",
      },
      {
        id: 2,
        title: "commission",
        icon: <CurrencyExchangeIcon className="!text-white" />,

        subMenu: [
          {
            id: 21,
            subTitle: "Commission Pay",
            path: "./commissionpay",
          },
          // {
          //   id: 22,
          //   subTitle: "Commission packs",
          //   path: "./commissionpacks",
          // },
          // {
          //   id: 23,
          //   subTitle: "Commission",
          //   ultraSubMenu: [
          //     {
          //       id: 231,
          //       subTitle: "Commission Pay",
          //       path: "./commissionnpay",
          //     },
          //   ],
          // },
          {
            id: 24,
            subTitle: "Surcharge",
            ultraSubMenu: [
              {
                id: 242,
                subTitle: "Surcharge Pay",
                path: "./surchargepay",
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: "users",
        icon: <SupervisedUserCircleIcon className="!text-white" />,

        subMenu: [
          {
            id: 41,
            subTitle: "Channal Partner",
            ultraSubMenu: [
              {
                id: 411,
                subTitle: "Channal Partner List",
                path: "./admincplist",
              },
              {
                id: 412,
                subTitle: "Add Channel Partner",
                path: "./adminaddcp",
              },
            ],
          },
          {
            id: 42,
            subTitle: "Super distributors",
            ultraSubMenu: [
              {
                id: 421,
                subTitle: "Super distributor list",
                path: "./adminsdlist",
              },
              {
                id: 422,
                subTitle: "Add super distributor",
                path: "./adminaddsd",
              },
            ],
          },
          {
            id: 43,
            subTitle: "Master distributors",
            ultraSubMenu: [
              {
                id: 431,
                subTitle: "Master distributor list",
                path: "./adminmdlist",
              },
              {
                id: 432,
                subTitle: "Add master distributor",
                path: "./adminaddmd",
              },
            ],
          },
          {
            id: 44,
            subTitle: "Distributors",
            ultraSubMenu: [
              {
                id: 441,
                subTitle: "Distributor list",
                path: "./admindlist",
              },
              {
                id: 442,
                subTitle: "Add distributor",
                path: "./adminaddd",
              },
            ],
          },
          {
            id: 45,
            subTitle: "Retailers",
            ultraSubMenu: [
              {
                id: 451,
                subTitle: "Retailer list",
                path: "./adminrlist",
              },
              {
                id: 452,
                subTitle: "Add retailer",
                path: "./adminaddr",
              },
              {
                id: 453,
                subTitle: "Retailer Services",
                path: "./rservices",
              },
            ],
          },
          {
            id: 46,
            subTitle: "Members",
            ultraSubMenu: [
              {
                id: 461,
                subTitle: "Members list",
                path: "./comingsoon",
              },
            ],
          },
          {
            id: 47,
            subTitle: "Change parent",
            path: "./assignparentuserr",
          },
          {
            id: 48,
            subTitle: "Change mobile number in KYC",
            path: "./changemobilenumber",
          },
          {
            id: 49,
            subTitle: "KYC verification",
            path: "./kycverificationn",
          },
          {
            id: 50,
            subTitle: "KYC verified",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          {
            id: 51,
            subTitle: "Send Money",
            path: "./addmainbalance",
          },
          {
            id: 52,
            subTitle: "Reverse MAIN balance",
            path: "./addmainbalance_2",
          },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "Report Panel",
            path: "./reports",
          },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          // {
          //   id: 76,
          //   subTitle: "Distributor primary report",
          //   path: "./distriprimaryreport",
          // },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      {
        id: 7,
        title: "other reports",
        icon: <BarChartIcon className="!text-white" />,
        subMenu: [
          {
            id: 71,
            subTitle: "Money transfer reports",
            path: "./moneytransferreport",
          },
          {
            id: 72,
            subTitle: "AEPS report",
            path: "./aepsreport",
          },
          {
            id: 73,
            subTitle: "Operator wise report",
            path: "./comingsoon",
          },
          {
            id: 74,
            subTitle: "User wise report",
            path: "./userwisereport",
          },

          {
            id: 78,
            subTitle: "Individual report",
            path: "./individualreport",
          },
          {
            id: 79,
            subTitle: "Opening closing report MAIN",
            path: "./openingclosingreportmain",
          },
          {
            id: 80,
            subTitle: "Operatorwise commission report",
            path: "./operatorwcreport",
          },
          {
            id: 81,
            subTitle: "Commission distribution report",
            path: "./comissiondistribreport",
          },
          {
            id: 82,
            subTitle: "Refund success report",
            path: "./refundsucessstory",
          },
          {
            id: 83,
            subTitle: "Status change report",
            path: "./statuschangereport",
          },
          {
            id: 84,
            subTitle: "Last 3 days secondary report",
            path: "./lastdaysecondaryreport",
          },
          {
            id: 85,
            subTitle: "Retailers stock not taken",
            path: "./retailerstocknottaken",
          },
          {
            id: 86,
            subTitle: "Retailers sale not done",
            path: "./retailersalenotdone",
          },
          {
            id: 87,
            subTitle: "Users sale done",
            path: "./usersaledone",
          },
        ],
      },
      {
        id: 8,
        title: "admin",
        icon: <PersonOutlineIcon className="!text-white" />,
        subMenu: [
          {
            id: 89,
            subTitle: "Add admin MAIN balance",
            path: "./addadmin",
          },
          {
            id: 90,
            subTitle: "Notice",
            path: "./notice",
          },
          {
            id: 91,
            subTitle: "USER KYC",
            path: "./userkyc",
          },
          {
            id: 92,
            subTitle: "Send sms",
            path: "./sendsms",
          },
          {
            id: 93,
            subTitle: "Send whatsapp",
            path: "./sendwhatsapp",
          },
          {
            id: 94,
            subTitle: "Send email",
            path: "./sendemail",
          },
          {
            id: 95,
            subTitle: "Send notification",
            path: "./sendnotification",
          },
          {
            id: 96,
            subTitle: "Banks",
            path: "./banks",
          },
          {
            id: 97,
            subTitle: "Settings",
            path: "./setting",
          },
          {
            id: 98,
            subTitle: "Circle master",
            path: "./circlemasterscreenn",
          },
          {
            id: 99,
            subTitle: "Website logs",
            path: "./websitelogsscreen",
          },
          {
            id: 100,
            subTitle: "Website logs archive",
            path: "./weblogsarchive",
          },
          {
            id: 101,
            subTitle: "SMS logs",
            path: "./smslogs",
          },
          {
            id: 102,
            subTitle: "IP whitelist",
            path: "./ipwhitelistss",
          },
          {
            id: 103,
            subTitle: "Provider types",
            path: "./providertypescreen",
          },
          {
            id: 104,
            subTitle: "Circles",
            path: "./circlesscreen",
          },
        ],
      },
    ],
  },
  {
    id: 901,
    userType: "Channel_Partner",
    bgColorOne: "#81cda9",
    bgColorTwo: "#054426",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./cpbreadcrumb",
      },
      {
        id: 2,
        title: "commission",
        icon: <CurrencyExchangeIcon className="!text-white" />,

        subMenu: [
          {
            id: 21,
            subTitle: "Create package",
            path: "./createpack",
          },
          {
            id: 22,
            subTitle: "Commission packs",
            path: "./commissionpacks",
          },
        ],
      },

      {
        id: 4,
        title: "users",
        icon: <SupervisedUserCircleIcon className="!text-white" />,

        subMenu: [
          {
            id: 41,
            subTitle: "Super distributors",
            ultraSubMenu: [
              {
                id: 411,
                subTitle: "Super distributor list",
                path: "./superdistrilist",
              },
              {
                id: 412,
                subTitle: "Add super distributor",
                path: "./addsuperdistributor",
              },
              // {
              //   id: 413,
              //   subTitle: "Pay Super distributor",
              //   path: "./paydistributorpage",
              // },
            ],
          },
          {
            id: 42,
            subTitle: "Master distributors",
            ultraSubMenu: [
              {
                id: 421,
                subTitle: "Master distributor list",
                path: "./masterdistributor",
              },
              {
                id: 422,
                subTitle: "Add master distributor",
                path: "./addmasterdistributor",
              },
            ],
          },
          {
            id: 43,
            subTitle: "Distributors",
            ultraSubMenu: [
              {
                id: 431,
                subTitle: "Distributor list",
                path: "./distributorlist",
              },
              {
                id: 432,
                subTitle: "Add distributor",
                path: "./adddistributor",
              },
            ],
          },
          {
            id: 44,
            subTitle: "Retailers",
            ultraSubMenu: [
              {
                id: 441,
                subTitle: "Retailer list",
                path: "./retailers",
              },
              {
                id: 442,
                subTitle: "Add retailer",
                path: "./addretailer",
              },
              {
                id: 443,
                subTitle: "Retailer Services",
                path: "./rservices",
              },
            ],
          },

          {
            id: 46,
            subTitle: "Members",
            ultraSubMenu: [
              {
                id: 461,
                subTitle: "Members list",
                path: "./comingsoon",
              },
            ],
          },
          // {
          //   id: 47,
          //   subTitle: "Change parent",
          //   path: "./assignparentuserr",
          // },
          // {
          //   id: 48,
          //   subTitle: "Change mobile number in KYC",
          //   path: "./changemobilenumber",
          // },
          {
            id: 49,
            subTitle: "KYC verification",
            path: "./kycverificationn",
          },
          {
            id: 50,
            subTitle: "KYC verified",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          {
            id: 51,
            subTitle: "Send Money",
            path: "./addmainbalance",
          },
          // {
          //   id: 52,
          //   subTitle: "Reverse MAIN balance",
          //   path: "./addmainbalance_2",
          // },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "My Transaction",
            path: "./mytransactioncp",
          },
          // {
          //   id: 69,
          //   subTitle: "MAIN Payment Summary",
          //   path: "./mainpaymentsummary",
          // },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          // {
          //   id: 76,
          //   subTitle: "Distributor primary report",
          //   path: "./distriprimaryreport",
          // },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      {
        id: 7,
        title: "other reports",
        icon: <BarChartIcon className="!text-white" />,
        subMenu: [
          {
            id: 71,
            subTitle: "Money transfer reports",
            path: "./moneytransferreport",
          },
          {
            id: 72,
            subTitle: "AEPS report",
            path: "./aepsreport",
          },
          {
            id: 73,
            subTitle: "Operator wise report",
            path: "./comingsoon",
          },
          {
            id: 74,
            subTitle: "User wise report",
            path: "./userwisereport",
          },

          {
            id: 78,
            subTitle: "Individual report",
            path: "./individualreport",
          },
          {
            id: 79,
            subTitle: "Opening closing report MAIN",
            path: "./openingclosingreportmain",
          },
          {
            id: 80,
            subTitle: "Operatorwise commission report",
            path: "./operatorwcreport",
          },
          {
            id: 81,
            subTitle: "Commission distribution report",
            path: "./comissiondistribreport",
          },
          {
            id: 82,
            subTitle: "Refund success report",
            path: "./refundsucessstory",
          },
          {
            id: 83,
            subTitle: "Status change report",
            path: "./statuschangereport",
          },
          {
            id: 84,
            subTitle: "Last 3 days secondary report",
            path: "./lastdaysecondaryreport",
          },
          {
            id: 85,
            subTitle: "Retailers stock not taken",
            path: "./retailerstocknottaken",
          },
          {
            id: 86,
            subTitle: "Retailers sale not done",
            path: "./retailersalenotdone",
          },
          {
            id: 87,
            subTitle: "Users sale done",
            path: "./usersaledone",
          },
        ],
      },
      {
        id: 8,
        title: "admin",
        icon: <PersonOutlineIcon className="!text-white" />,
        subMenu: [
          {
            id: 89,
            subTitle: "Add admin MAIN balance",
            path: "./addadmin",
          },
          {
            id: 90,
            subTitle: "Notice",
            path: "./notice",
          },
          {
            id: 91,
            subTitle: "USER KYC",
            path: "./userkyc",
          },
          {
            id: 92,
            subTitle: "Send sms",
            path: "./sendsms",
          },
          {
            id: 93,
            subTitle: "Send whatsapp",
            path: "./sendwhatsapp",
          },
          {
            id: 94,
            subTitle: "Send email",
            path: "./sendemail",
          },
          {
            id: 95,
            subTitle: "Send notification",
            path: "./sendnotification",
          },
          {
            id: 96,
            subTitle: "Banks",
            path: "./banks",
          },
          {
            id: 97,
            subTitle: "Settings",
            path: "./setting",
          },
          {
            id: 98,
            subTitle: "Circle master",
            path: "./circlemasterscreenn",
          },
          {
            id: 99,
            subTitle: "Website logs",
            path: "./websitelogsscreen",
          },
          {
            id: 100,
            subTitle: "Website logs archive",
            path: "./weblogsarchive",
          },
          {
            id: 101,
            subTitle: "SMS logs",
            path: "./smslogs",
          },
          {
            id: 102,
            subTitle: "IP whitelist",
            path: "./ipwhitelistss",
          },
          {
            id: 103,
            subTitle: "Provider types",
            path: "./providertypescreen",
          },
          {
            id: 104,
            subTitle: "Circles",
            path: "./circlesscreen",
          },
        ],
      },
    ],
  },
  {
    id: 902,
    userType: "Super_Distributor",
    bgColorOne: "#fae9dd",
    bgColorTwo: "#ff8831",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./sdbreadcrumb",
      },
      {
        id: 2,
        title: "commission",
        icon: <CurrencyExchangeIcon className="!text-white" />,

        subMenu: [
          {
            id: 21,
            subTitle: "Create package",
            path: "./createpack",
          },
          {
            id: 22,
            subTitle: "Commission packs",
            path: "./commissionpacks",
          },
        ],
      },

      {
        id: 4,
        title: "users",
        icon: <SupervisedUserCircleIcon className="!text-white" />,

        subMenu: [
          {
            id: 41,
            subTitle: "Master distributors",
            ultraSubMenu: [
              {
                id: 411,
                subTitle: "Master distributor list",
                path: "./masterdistributor",
              },
              {
                id: 412,
                subTitle: "Add master distributor",
                path: "./addretailer",
              },
            ],
          },
          {
            id: 42,
            subTitle: "Distributors",
            ultraSubMenu: [
              {
                id: 421,
                subTitle: "Distributor list",
                path: "./distributorlist",
              },
              {
                id: 422,
                subTitle: "Add distributor",
                path: "./adddistributor",
              },
            ],
          },
          {
            id: 43,
            subTitle: "Retailers",
            ultraSubMenu: [
              {
                id: 431,
                subTitle: "Retailer list",
                path: "./retailers",
              },
              {
                id: 432,
                subTitle: "Add retailer",
                path: "./addretailer",
              },
              {
                id: 443,
                subTitle: "Retailer Services",
                path: "./rservices",
              },
            ],
          },

          {
            id: 46,
            subTitle: "Members",
            ultraSubMenu: [
              {
                id: 461,
                subTitle: "Members list",
                path: "./comingsoon",
              },
            ],
          },
          // {
          //   id: 47,
          //   subTitle: "Change parent",
          //   path: "./assignparentuserr",
          // },
          // {
          //   id: 48,
          //   subTitle: "Change mobile number in KYC",
          //   path: "./changemobilenumber",
          // },
          {
            id: 49,
            subTitle: "KYC verification",
            path: "./kycverificationn",
          },
          {
            id: 50,
            subTitle: "KYC verified",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          {
            id: 51,
            subTitle: "Send balance",
            path: "./addmainbalance",
          },
          // {
          //   id: 52,
          //   subTitle: "Reverse MAIN balance",
          //   path: "./addmainbalance_2",
          // },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "My Transaction",
            path: "./mytransactionsd",
          },
          // {
          //   id: 69,
          //   subTitle: "MAIN Payment Summary",
          //   path: "./mainpaymentsummary",
          // },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          // {
          //   id: 76,
          //   subTitle: "Distributor primary report",
          //   path: "./distriprimaryreport",
          // },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      {
        id: 7,
        title: "other reports",
        icon: <BarChartIcon className="!text-white" />,
        subMenu: [
          {
            id: 71,
            subTitle: "Money transfer reports",
            path: "./moneytransferreport",
          },
          {
            id: 72,
            subTitle: "AEPS report",
            path: "./aepsreport",
          },
          {
            id: 73,
            subTitle: "Operator wise report",
            path: "./comingsoon",
          },
          {
            id: 74,
            subTitle: "User wise report",
            path: "./userwisereport",
          },

          {
            id: 78,
            subTitle: "Individual report",
            path: "./individualreport",
          },
          {
            id: 79,
            subTitle: "Opening closing report MAIN",
            path: "./openingclosingreportmain",
          },
          {
            id: 80,
            subTitle: "Operatorwise commission report",
            path: "./operatorwcreport",
          },
          {
            id: 81,
            subTitle: "Commission distribution report",
            path: "./comissiondistribreport",
          },
          {
            id: 82,
            subTitle: "Refund success report",
            path: "./refundsucessstory",
          },
          {
            id: 83,
            subTitle: "Status change report",
            path: "./statuschangereport",
          },
          {
            id: 84,
            subTitle: "Last 3 days secondary report",
            path: "./lastdaysecondaryreport",
          },
          {
            id: 85,
            subTitle: "Retailers stock not taken",
            path: "./retailerstocknottaken",
          },
          {
            id: 86,
            subTitle: "Retailers sale not done",
            path: "./retailersalenotdone",
          },
          {
            id: 87,
            subTitle: "Users sale done",
            path: "./usersaledone",
          },
        ],
      },
      {
        id: 8,
        title: "admin",
        icon: <PersonOutlineIcon className="!text-white" />,
        subMenu: [
          {
            id: 89,
            subTitle: "Add admin MAIN balance",
            path: "./addadmin",
          },
          {
            id: 90,
            subTitle: "Notice",
            path: "./notice",
          },
          {
            id: 91,
            subTitle: "USER KYC",
            path: "./userkyc",
          },
          {
            id: 92,
            subTitle: "Send sms",
            path: "./sendsms",
          },
          {
            id: 93,
            subTitle: "Send whatsapp",
            path: "./sendwhatsapp",
          },
          {
            id: 94,
            subTitle: "Send email",
            path: "./comingsoon",
          },
          {
            id: 95,
            subTitle: "Send notification",
            path: "./sendnotification",
          },
          {
            id: 96,
            subTitle: "Banks",
            path: "./banks",
          },
          {
            id: 97,
            subTitle: "Settings",
            path: "./setting",
          },
          {
            id: 98,
            subTitle: "Circle master",
            path: "./circlemasterscreenn",
          },
          {
            id: 99,
            subTitle: "Website logs",
            path: "./websitelogsscreen",
          },
          {
            id: 100,
            subTitle: "Website logs archive",
            path: "./weblogsarchive",
          },
          {
            id: 101,
            subTitle: "SMS logs",
            path: "./smslogs",
          },
          {
            id: 102,
            subTitle: "IP whitelist",
            path: "./ipwhitelistss",
          },
          {
            id: 103,
            subTitle: "Provider types",
            path: "./providertypescreen",
          },
          {
            id: 104,
            subTitle: "Circles",
            path: "./circlesscreen",
          },
        ],
      },
    ],
  },
  {
    id: 903,
    userType: "Master_Distributor",
    bgColorOne: "#c2a8f5",
    bgColorTwo: "#5e17eb",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./mdbreadcrumb",
      },
      {
        id: 2,
        title: "commission",
        icon: <CurrencyExchangeIcon className="!text-white" />,

        subMenu: [
          {
            id: 21,
            subTitle: "Create package",
            path: "./createpack",
          },
          {
            id: 22,
            subTitle: "Commission packs",
            path: "./commissionpacks",
          },
        ],
      },

      {
        id: 4,
        title: "users",
        icon: <SupervisedUserCircleIcon className="!text-white" />,

        subMenu: [
          {
            id: 41,
            subTitle: "Distributors",
            ultraSubMenu: [
              {
                id: 411,
                subTitle: "Distributor list",
                path: "./distributorlist",
              },
              {
                id: 412,
                subTitle: "Add distributor",
                path: "./adddistributor",
              },
            ],
          },
          {
            id: 42,
            subTitle: "Retailers",
            ultraSubMenu: [
              {
                id: 421,
                subTitle: "Retailer list",
                path: "./retailers",
              },
              {
                id: 422,
                subTitle: "Add retailer",
                path: "./addretailer",
              },
              {
                id: 423,
                subTitle: "Retailer Services",
                path: "./rservices",
              },
            ],
          },

          {
            id: 46,
            subTitle: "Members",
            ultraSubMenu: [
              {
                id: 461,
                subTitle: "Members list",
                path: "./comingsoon",
              },
            ],
          },
          // {
          //   id: 47,
          //   subTitle: "Change parent",
          //   path: "./assignparentuserr",
          // },
          // {
          //   id: 48,
          //   subTitle: "Change mobile number in KYC",
          //   path: "./changemobilenumber",
          // },
          {
            id: 49,
            subTitle: "KYC verification",
            path: "./kycverificationn",
          },
          {
            id: 50,
            subTitle: "KYC verified",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          {
            id: 51,
            subTitle: "Send balance",
            path: "./addmainbalance",
          },
          // {
          //   id: 52,
          //   subTitle: "Reverse MAIN balance",
          //   path: "./addmainbalance_2",
          // },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "My Transaction",
            path: "./mytransactionmd",
          },
          // {
          //   id: 69,
          //   subTitle: "MAIN Payment Summary",
          //   path: "./mainpaymentsummary",
          // },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          // {
          //   id: 76,
          //   subTitle: "Distributor primary report",
          //   path: "./distriprimaryreport",
          // },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      {
        id: 7,
        title: "other reports",
        icon: <BarChartIcon className="!text-white" />,
        subMenu: [
          {
            id: 71,
            subTitle: "Money transfer reports",
            path: "./moneytransferreport",
          },
          {
            id: 72,
            subTitle: "AEPS report",
            path: "./aepsreport",
          },
          {
            id: 73,
            subTitle: "Operator wise report",
            path: "./comingsoon",
          },
          {
            id: 74,
            subTitle: "User wise report",
            path: "./userwisereport",
          },

          {
            id: 78,
            subTitle: "Individual report",
            path: "./individualreport",
          },
          {
            id: 79,
            subTitle: "Opening closing report MAIN",
            path: "./openingclosingreportmain",
          },
          {
            id: 80,
            subTitle: "Operatorwise commission report",
            path: "./operatorwcreport",
          },
          {
            id: 81,
            subTitle: "Commission distribution report",
            path: "./comissiondistribreport",
          },
          {
            id: 82,
            subTitle: "Refund success report",
            path: "./refundsucessstory",
          },
          {
            id: 83,
            subTitle: "Status change report",
            path: "./statuschangereport",
          },
          {
            id: 84,
            subTitle: "Last 3 days secondary report",
            path: "./lastdaysecondaryreport",
          },
          {
            id: 85,
            subTitle: "Retailers stock not taken",
            path: "./retailerstocknottaken",
          },
          {
            id: 86,
            subTitle: "Retailers sale not done",
            path: "./retailersalenotdone",
          },
          {
            id: 87,
            subTitle: "Users sale done",
            path: "./usersaledone",
          },
        ],
      },
      {
        id: 8,
        title: "admin",
        icon: <PersonOutlineIcon className="!text-white" />,
        subMenu: [
          {
            id: 89,
            subTitle: "Add admin MAIN balance",
            path: "./addadmin",
          },
          {
            id: 90,
            subTitle: "Notice",
            path: "./notice",
          },
          {
            id: 91,
            subTitle: "USER KYC",
            path: "./userkyc",
          },
          {
            id: 92,
            subTitle: "Send sms",
            path: "./sendsms",
          },
          {
            id: 93,
            subTitle: "Send whatsapp",
            path: "./sendwhatsapp",
          },
          {
            id: 94,
            subTitle: "Send email",
            path: "./comingsoon",
          },
          {
            id: 95,
            subTitle: "Send notification",
            path: "./sendnotification",
          },
          {
            id: 96,
            subTitle: "Banks",
            path: "./banks",
          },
          {
            id: 97,
            subTitle: "Settings",
            path: "./setting",
          },
          {
            id: 98,
            subTitle: "Circle master",
            path: "./circlemasterscreenn",
          },
          {
            id: 99,
            subTitle: "Website logs",
            path: "./websitelogsscreen",
          },
          {
            id: 100,
            subTitle: "Website logs archive",
            path: "./weblogsarchive",
          },
          {
            id: 101,
            subTitle: "SMS logs",
            path: "./smslogs",
          },
          {
            id: 102,
            subTitle: "IP whitelist",
            path: "./ipwhitelistss",
          },
          {
            id: 103,
            subTitle: "Provider types",
            path: "./providertypescreen",
          },
          {
            id: 104,
            subTitle: "Circles",
            path: "./circlesscreen",
          },
        ],
      },
    ],
  },
  {
    id: 904,
    userType: "Distributor",
    bgColorOne: "#c0cafa",
    bgColorTwo: "#5271ff",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./dbreadcrumb",
      },
      {
        id: 2,
        title: "commission",
        icon: <CurrencyExchangeIcon className="!text-white" />,

        subMenu: [
          {
            id: 21,
            subTitle: "Create package",
            path: "./createpack",
          },
          {
            id: 22,
            subTitle: "Commission packs",
            path: "./commissionpacks",
          },
        ],
      },

      {
        id: 4,
        title: "users",
        icon: <SupervisedUserCircleIcon className="!text-white" />,

        subMenu: [
          {
            id: 41,
            subTitle: "Retailers",
            ultraSubMenu: [
              {
                id: 411,
                subTitle: "Retailer list",
                path: "./retailers",
              },
              {
                id: 412,
                subTitle: "Add retailer",
                path: "./addretailer",
              },
              {
                id: 413,
                subTitle: "Retailer Services",
                path: "./rservices",
              },
            ],
          },

          {
            id: 46,
            subTitle: "Members",
            ultraSubMenu: [
              {
                id: 461,
                subTitle: "Members list",
                path: "./comingsoon",
              },
            ],
          },
          // {
          //   id: 47,
          //   subTitle: "Change parent",
          //   path: "./assignparentuserr",
          // },
          // {
          //   id: 48,
          //   subTitle: "Change mobile number in KYC",
          //   path: "./changemobilenumber",
          // },
          {
            id: 49,
            subTitle: "KYC verification",
            path: "./kycverificationn",
          },
          {
            id: 50,
            subTitle: "KYC verified",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          {
            id: 51,
            subTitle: "Send balance",
            path: "./addmainbalance",
          },
          // {
          //   id: 52,
          //   subTitle: "Reverse MAIN balance",
          //   path: "./addmainbalance_2",
          // },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "My Transaction",
            path: "./mytransactiond",
          },
          // {
          //   id: 69,
          //   subTitle: "MAIN Payment Summary",
          //   path: "./mainpaymentsummary",
          // },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          // {
          //   id: 76,
          //   subTitle: "Distributor primary report",
          //   path: "./distriprimaryreport",
          // },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      {
        id: 7,
        title: "other reports",
        icon: <BarChartIcon className="!text-white" />,
        subMenu: [
          {
            id: 71,
            subTitle: "Money transfer reports",
            path: "./moneytransferreport",
          },
          {
            id: 72,
            subTitle: "AEPS report",
            path: "./aepsreport",
          },
          {
            id: 73,
            subTitle: "Operator wise report",
            path: "./comingsoon",
          },
          {
            id: 74,
            subTitle: "User wise report",
            path: "./userwisereport",
          },

          {
            id: 78,
            subTitle: "Individual report",
            path: "./individualreport",
          },
          {
            id: 79,
            subTitle: "Opening closing report MAIN",
            path: "./openingclosingreportmain",
          },
          {
            id: 80,
            subTitle: "Operatorwise commission report",
            path: "./operatorwcreport",
          },
          {
            id: 81,
            subTitle: "Commission distribution report",
            path: "./comissiondistribreport",
          },
          {
            id: 82,
            subTitle: "Refund success report",
            path: "./refundsucessstory",
          },
          {
            id: 83,
            subTitle: "Status change report",
            path: "./statuschangereport",
          },
          {
            id: 84,
            subTitle: "Last 3 days secondary report",
            path: "./lastdaysecondaryreport",
          },
          {
            id: 85,
            subTitle: "Retailers stock not taken",
            path: "./retailerstocknottaken",
          },
          {
            id: 86,
            subTitle: "Retailers sale not done",
            path: "./retailersalenotdone",
          },
          {
            id: 87,
            subTitle: "Users sale done",
            path: "./usersaledone",
          },
        ],
      },
      {
        id: 8,
        title: "admin",
        icon: <PersonOutlineIcon className="!text-white" />,
        subMenu: [
          {
            id: 89,
            subTitle: "Add admin MAIN balance",
            path: "./addadmin",
          },
          {
            id: 90,
            subTitle: "Notice",
            path: "./notice",
          },
          {
            id: 91,
            subTitle: "USER KYC",
            path: "./userkyc",
          },
          {
            id: 92,
            subTitle: "Send sms",
            path: "./sendsms",
          },
          {
            id: 93,
            subTitle: "Send whatsapp",
            path: "./sendwhatsapp",
          },
          {
            id: 94,
            subTitle: "Send email",
            path: "./comingsoon",
          },
          {
            id: 95,
            subTitle: "Send notification",
            path: "./sendnotification",
          },
          {
            id: 96,
            subTitle: "Banks",
            path: "./banks",
          },
          {
            id: 97,
            subTitle: "Settings",
            path: "./setting",
          },
          {
            id: 98,
            subTitle: "Circle master",
            path: "./circlemasterscreenn",
          },
          {
            id: 99,
            subTitle: "Website logs",
            path: "./websitelogsscreen",
          },
          {
            id: 100,
            subTitle: "Website logs archive",
            path: "./weblogsarchive",
          },
          {
            id: 101,
            subTitle: "SMS logs",
            path: "./smslogs",
          },
          {
            id: 102,
            subTitle: "IP whitelist",
            path: "./ipwhitelistss",
          },
          {
            id: 103,
            subTitle: "Provider types",
            path: "./providertypescreen",
          },
          {
            id: 104,
            subTitle: "Circles",
            path: "./circlesscreen",
          },
        ],
      },
    ],
  },
  {
    id: 905,
    userType: "Retailer",
    bgColorOne: "#cef7fa",
    bgColorTwo: "#55f5ff",
    mainArr: [
      {
        id: 1,
        title: "dashboard",
        icon: <DashboardIcon className="!text-white" />,
        path: "./rbreadcrumb",
      },
      // {
      //   id: 2,
      //   title: "commission",
      //   icon: <CurrencyExchangeIcon className="!text-white" />,

      //   subMenu: [
      //     {
      //       id: 21,
      //       subTitle: "Create package",
      //       path: "./createpack",
      //     },
      //     {
      //       id: 22,
      //       subTitle: "Commission packs",
      //       path: "./commissionpacks",
      //     },
      //   ],
      // },

      // {
      //   id: 4,
      //   title: "users",
      //   icon: <SupervisedUserCircleIcon className="!text-white" />,

      //   subMenu: [
      //     // {
      //     //   id: 46,
      //     //   subTitle: "Members",
      //     //   ultraSubMenu: [
      //     //     {
      //     //       id: 461,
      //     //       subTitle: "Members list",
      //     //       path: "./comingsoon",
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   id: 47,
      //     //   subTitle: "Change parent",
      //     //   path: "./assignparentuserr",
      //     // },
      //     // {
      //     //   id: 48,
      //     //   subTitle: "Change mobile number in KYC",
      //     //   path: "./changemobilenumber",
      //     // },
      //     {
      //       id: 48,
      //       subTitle: "Retailer Services",
      //       path: "./rservices",
      //     },
      //     {
      //       id: 49,
      //       subTitle: "KYC verification",
      //       path: "./kycverificationn",
      //     },
      //     {
      //       id: 50,
      //       subTitle: "KYC verified",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 5,
        title: "balance",
        icon: <CurrencyRupeeIcon className="!text-white" />,
        subMenu: [
          // {
          //   id: 51,
          //   subTitle: "Add MAIN balance",
          //   path: "./addmainbalance",
          // },
          // {
          //   id: 52,
          //   subTitle: "Reverse MAIN balance",
          //   path: "./addmainbalance_2",
          // },
          {
            id: 53,
            subTitle: "Add Balance",
            path: "./easebuzpayment",
          },
        ],
      },
      {
        id: 6,
        title: "report",
        icon: <SummarizeIcon className="!text-white" />,
        subMenu: [
          {
            id: 62,
            subTitle: "Transaction history",
            path: "./transactionhistory",
          },
          {
            id: 63,
            subTitle: "Transaction history with parent",
            path: "./transactionhistwithparent",
          },

          {
            id: 66,
            subTitle: "Complaints",
            path: "./refund_2",
          },
          {
            id: 67,
            subTitle: "Complaints history",
            path: "./complainthistory",
          },
          {
            id: 68,
            subTitle: "Refunds",
            path: "./refund",
          },
          {
            id: 69,
            subTitle: "My Transaction",
            path: "./mytransactionr",
          },
          // {
          //   id: 69,
          //   subTitle: "MAIN Payment Summary",
          //   path: "./mainpaymentsummary",
          // },
          // {
          //   id: 70,
          //   subTitle: "MAIN payment summary gateway",
          //   path: "./mpsg",
          // },
          // {
          //   id: 71,
          //   subTitle: "MAIN payment summery AEPS/MATM",
          //   path: "./mainpaymentsummaryaepsmatm",
          // },
          // {
          //   id: 72,
          //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
          //   path: "./maingatewaycommidistribution",
          // },
          {
            id: 73,
            subTitle: "Balance requests",
            path: "./balancerequests",
          },
          // {
          //   id: 74,
          //   subTitle: "Balance requests gateway / AEPS",
          //   path: "./balancereqgateway",
          // },
          {
            id: 75,
            subTitle: "Balance request history",
            path: "./balancereqhist",
          },
          {
            id: 76,
            subTitle: "Distributor primary report",
            path: "./distriprimaryreport",
          },
          {
            id: 77,
            subTitle: "Activation report",
            path: "./activationreport",
          },
          {
            id: 78,
            subTitle: "User cashback report",
            path: "./usercashback",
          },
        ],
      },
      // {
      //   id: 7,
      //   title: "other reports",
      //   icon: <BarChartIcon className="!text-white" />,
      //   subMenu: [
      //     {
      //       id: 71,
      //       subTitle: "Money transfer reports",
      //       path: "./moneytransferreport",
      //     },
      //     {
      //       id: 72,
      //       subTitle: "AEPS report",
      //       path: "./aepsreport",
      //     },
      //     {
      //       id: 73,
      //       subTitle: "Operator wise report",
      //       path: "./comingsoon",
      //     },
      //     {
      //       id: 74,
      //       subTitle: "User wise report",
      //       path: "./userwisereport",
      //     },

      //     {
      //       id: 78,
      //       subTitle: "Individual report",
      //       path: "./individualreport",
      //     },
      //     {
      //       id: 79,
      //       subTitle: "Opening closing report MAIN",
      //       path: "./openingclosingreportmain",
      //     },
      //     {
      //       id: 80,
      //       subTitle: "Operatorwise commission report",
      //       path: "./operatorwcreport",
      //     },
      //     {
      //       id: 81,
      //       subTitle: "Commission distribution report",
      //       path: "./comissiondistribreport",
      //     },
      //     {
      //       id: 82,
      //       subTitle: "Refund success report",
      //       path: "./refundsucessstory",
      //     },
      //     {
      //       id: 83,
      //       subTitle: "Status change report",
      //       path: "./statuschangereport",
      //     },
      //     {
      //       id: 84,
      //       subTitle: "Last 3 days secondary report",
      //       path: "./lastdaysecondaryreport",
      //     },
      //     {
      //       id: 85,
      //       subTitle: "Retailers stock not taken",
      //       path: "./retailerstocknottaken",
      //     },
      //     {
      //       id: 86,
      //       subTitle: "Retailers sale not done",
      //       path: "./retailersalenotdone",
      //     },
      //     {
      //       id: 87,
      //       subTitle: "Users sale done",
      //       path: "./usersaledone",
      //     },
      //   ],
      // },
      // {
      //   id: 8,
      //   title: "admin",
      //   icon: <PersonOutlineIcon className="!text-white" />,
      //   subMenu: [
      //     {
      //       id: 89,
      //       subTitle: "Add admin MAIN balance",
      //       path: "./addadmin",
      //     },
      //     {
      //       id: 90,
      //       subTitle: "Notice",
      //       path: "./notice",
      //     },
      //     {
      //       id: 91,
      //       subTitle: "USER KYC",
      //       path: "./userkyc",
      //     },
      //     {
      //       id: 92,
      //       subTitle: "Send sms",
      //       path: "./sendsms",
      //     },
      //     {
      //       id: 93,
      //       subTitle: "Send whatsapp",
      //       path: "./sendwhatsapp",
      //     },
      //     {
      //       id: 94,
      //       subTitle: "Send email",
      //       path: "./comingsoon",
      //     },
      //     {
      //       id: 95,
      //       subTitle: "Send notification",
      //       path: "./sendnotification",
      //     },
      //     {
      //       id: 96,
      //       subTitle: "Banks",
      //       path: "./banks",
      //     },
      //     {
      //       id: 97,
      //       subTitle: "Settings",
      //       path: "./setting",
      //     },
      //     {
      //       id: 98,
      //       subTitle: "Circle master",
      //       path: "./circlemasterscreenn",
      //     },
      //     {
      //       id: 99,
      //       subTitle: "Website logs",
      //       path: "./websitelogsscreen",
      //     },
      //     {
      //       id: 100,
      //       subTitle: "Website logs archive",
      //       path: "./weblogsarchive",
      //     },
      //     {
      //       id: 101,
      //       subTitle: "SMS logs",
      //       path: "./smslogs",
      //     },
      //     {
      //       id: 102,
      //       subTitle: "IP whitelist",
      //       path: "./ipwhitelistss",
      //     },
      //     {
      //       id: 103,
      //       subTitle: "Provider types",
      //       path: "./providertypescreen",
      //     },
      //     {
      //       id: 104,
      //       subTitle: "Circles",
      //       path: "./circlesscreen",
      //     },
      //   ],
      // },
    ],
  },
];
