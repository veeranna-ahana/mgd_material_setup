import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { BsPersonFill, BsFillGearFill, BsScrewdriver } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { DiOpenshift } from "react-icons/di";
import { MdReport } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { BiGitMerge } from "react-icons/bi";
import { SiGoogletagmanager, SiRedhatopenshift } from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { FiCpu } from "react-icons/fi";
import { VscServerProcess } from "react-icons/vsc";
import { FiGitPullRequest } from "react-icons/fi";
import { AiOutlineOrderedList } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaDropbox } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiLaserPrecision } from "react-icons/gi";
import { HiCubeTransparent } from "react-icons/hi";
import { AiFillSchedule } from "react-icons/ai";

export const customerSidebar = [
  {
    title: "Material Setup",
    path:"/MaterialSetUp",
    icon: <SiRedhatopenshift />,
    //iconClosed: <RiIcons.RiArrowDownSFill />,
    //iconOpened: <RiIcons.RiArrowUpSFill />,
    

  },
  // {
  //   title: "Profile",
  //   icon: <SiRedhatopenshift />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "New Order",
  //       path: "/Orders/Profile/NewOrder",
  //       icon: <BsServer />,
  //     },
  //     {
  //       title: "Find Order",
  //       path: "/Orders/Profile/FindOrder",
  //       icon: <VscServerProcess />,
  //     },
  //     {
  //       title: "Find Schedule",
  //       path: "/Orders/Profile/FindScheduleForm",
  //       icon: <VscServerProcess />,
  //     },
  //     {
  //       title: "Order List",
  //       icon: <FiCpu />,
  //       iconClosed: <RiIcons.RiArrowDownSFill />,
  //       iconOpened: <RiIcons.RiArrowUpSFill />,
  //       subNav: [
  //         {
  //           title: "Created",
  //           path: "/Orders/Profile/OrderList/Created",
  //         },
  //         {
  //           title: "Recorded",
  //           path: "/Orders/Profile/OrderList/Recorded",
  //         },
  //         {
  //           title: "Processing",
  //           path: "/Orders/Profile/OrderList/Processing",
  //         },
  //         {
  //           title: "Completed",
  //           path: "/Orders/Profile/OrderList/Completed",
  //         },
  //         {
  //           title: "Produced",
  //           path: "/Orders/Profile/OrderList/Produced",
  //         },
  //         {
  //           title: "Packed",
  //           path: "/Orders/Profile/OrderList/Packed",
  //         },
  //         {
  //           title: "Dispatched",
  //           path: "/Orders/Profile/OrderList/Dispatched",
  //         },
  //         {
  //           title: "All",
  //           path: "/Orders/Profile/OrderList/All",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Fixtures Order List",
  //       icon: <FiCpu />,
  //       iconClosed: <RiIcons.RiArrowDownSFill />,
  //       iconOpened: <RiIcons.RiArrowUpSFill />,
  //       subNav: [
  //         {
  //           title: "Recorded",
  //           path: "/Orders/Profile/FixturesOrderList/Recorded",
  //         },
  //         {
  //           title: "Processing",
  //           path: "/Orders/Profile/FixturesOrderList/Processing",
  //         },
  //         {
  //           title: "Completed",
  //           path: "/Orders/Profile/FixturesOrderList/Completed",
  //         },
  //         {
  //           title: "Ready",
  //           path: "/Orders/Profile/FixturesOrderList/Ready",
  //         },
  //         {
  //           title: "Handed Over",
  //           path: "/Orders/Profile/FixturesOrderList/HandedOver",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Internal Order List",
  //       icon: <FiCpu />,
  //       iconClosed: <RiIcons.RiArrowDownSFill />,
  //       iconOpened: <RiIcons.RiArrowUpSFill />,
  //       subNav: [
  //         {
  //           title: "Recorded",
  //           path: "/Orders/Profile/InternalOrderList/Recorded",
  //         },
  //         {
  //           title: "Processing",
  //           path: "/Orders/Profile/InternalOrderList/Processing",
  //         },
  //         {
  //           title: "Completed",
  //           path: "/Orders/Profile/InternalOrderList/Completed",
  //         },
  //         {
  //           title: "Ready",
  //           path: "/Orders/Profile/InternalOrderList/Ready",
  //         },
  //         {
  //           title: "Handed Over",
  //           path: "/Orders/Profile/InternalOrderList/HandedOver",
  //         },
  //       ],
  //     },
  //     // {
  //     //   title: "Print Lable",
  //     //   // path: "/production/setup/process",
  //     //   icon: <VscServerProcess />,
  //     // },
  //   ],
  // },
  // {
  //   title: "Profile",
  //   icon: <SiRedhatopenshift />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "New Order",
  //       path: "/orders/NewOrder",
  //       icon: <BsServer />,
  //     },
  //     {
  //       title: "Order List",
  //       icon: <FiCpu />,
  //       iconClosed: <RiIcons.RiArrowDownSFill />,
  //       iconOpened: <RiIcons.RiArrowUpSFill />,
  //       subNav: [
  //         {
  //           title: "Created",
  //           path: "/orders/orderList/orderlistCreated",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Combined Schedules",
  //   icon: <AiFillCreditCard />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Job Work",
  //       subNav: [
  //         {
  //           title: "Create",
  //           path: "/orders/combinedSchedules/JobWork/Create",
  //         },
  //       ],
  //     },
  //   ],
  // },

//   {
//     title: "Service",
//     icon: <SiRedhatopenshift />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
//     subNav: [
//       {
//         title: "New Order",
//         path: "/Orders/Service/NewOrder",
//         icon: <BsServer />,
//       },

//       {
//         title: "Find Order",
//         path: "/Orders/Service/FindOrder",
//         icon: <BsServer />,
//       },

//       {
//         title: "Order List",
//         icon: <FiCpu />,
//         iconClosed: <RiIcons.RiArrowDownSFill />,
//         iconOpened: <RiIcons.RiArrowUpSFill />,
//         subNav: [
//           {
//             title: "Created",
//             path: "/Orders/Service/OrderList/Created",
//           },

//           {
//             title: "Recorded",
//             path: "/Orders/Service/OrderList/Recorded",
//           },
//           {
//             title: "Completed",
//             path: "/Orders/Service/OrderList/Completed",
//           },
//           {
//             title: "Processing",
//             path: "/Orders/Service/OrderList/Processing",
//           },
//           {
//             title: "Produced",
//             path: "/Orders/Service/OrderList/Produced",
//           },
//           {
//             title: "Packed",
//             path: "/Orders/Service/OrderList/Packed",
//           },
//           {
//             title: "Dispatched",
//             path: "/Orders/Service/OrderList/Dispatched",
//           },

//           {
//             title: "All",
//             path: "/Orders/Service/OrderList/All",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     title: "Fabrication",
//     icon: <SiRedhatopenshift />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,
//     subNav: [
//       {
//         title: "New Order",
//         path: "/Orders/Fabrication/NewOrder",
//         icon: <BsServer />,
//       },

//       {
//         title: "Find Order",
//         path: "/Orders/Fabrication/FindOrder",
//         icon: <BsServer />,
//       },

//       {
//         title: "Order List",
//         icon: <FiCpu />,
//         iconClosed: <RiIcons.RiArrowDownSFill />,
//         iconOpened: <RiIcons.RiArrowUpSFill />,
//         subNav: [
//           {
//             title: "Created",
//             path: "/Orders/Fabrication/OrderList/Created",
//           },

//           {
//             title: "Recorded",
//             path: "/Orders/Fabrication/OrderList/Recorded",
//           },
//           {
//             title: "Processing",
//             path: "/Orders/Fabrication/OrderList/Processing",
//           },
//           {
//             title: "Completed",
//             path: "/Orders/Fabrication/OrderList/Completed",
//           },
//           {
//             title: "Produced",
//             path: "/Orders/Fabrication/OrderList/Produced",
//           },
//           {
//             title: "Packed",
//             path: "/Orders/Fabrication/OrderList/Packed",
//           },
//           {
//             title: "Dispatched",
//             path: "/Orders/Fabrication/OrderList/Dispatched",
//           },

//           {
//             title: "All",
//             path: "/Orders/Fabrication/OrderList/All",
//           },
//         ],
//       },
//     ],
//   },
];

export const adminSidebar = [
  {
    title: "Access",
    icon: <MdIcon.MdOutlineSecurity />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Menu Roles",
        path: "/admin/menuRoles",
        icon: <AiIcons.AiOutlineMenuFold />,
      },
    ],
  },
  {
    title: "Users",
    icon: <FaIcon.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Roles",
        path: "/admin/roles",
        icon: <VscTypeHierarchySub />,
      },
      {
        title: "Menus",
        path: "/admin/menus",
        icon: <BiFoodMenu />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <HiUsers />,
      },
    ],
  },
];
