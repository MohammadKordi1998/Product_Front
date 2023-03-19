/* eslint-disable no-unused-vars */
import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  // {
  //   _tag: "CSidebarNavTitle",
  //   _children: ["Theme"],
  // },
  {
    _tag: "CSidebarNavItem",
    name: "User",
    to: "/users",
    icon: "cil-user",
  },

  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Base",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Breadcrumb",
  //       to: "/base/breadcrumbs",
  //     },
  //   ],
  // },
];

export default _nav;
