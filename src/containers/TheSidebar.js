/* eslint-disable no-unused-vars */
import {
  CImg,
  CSidebar,
  CSidebarNav,
  CSidebarBrand,
  CCreateElement,
  CSidebarNavItem,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDivider,
  CSidebarNavDropdown,
} from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import LogoImage from "../image/Logo/p.webp";
import { useSelector, useDispatch } from "react-redux";
// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);
  const [nav] = navigation();
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CImg
          className="c-sidebar-brand-full"
          src={LogoImage}
          height={"100"}
          fluid
        />
        <CImg
          className="c-sidebar-brand-minimized"
          src={LogoImage}
          height={"100"}
          fluid
        />
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={nav}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
