/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import i18n from "src/i18n";
import CIcon from "@coreui/icons-react";
import React, { useEffect, useState } from "react";

const _nav = (t) => {
  const [nav, setnav] = useState();

  useEffect(() => {
    setnav([
      {
        _tag: "CSidebarNavItem",
        name: i18n.t("Users"),
        to: "/users",
        icon: "cil-user",
      },
    ]);
  }, []);

  return [nav];
};

export default _nav;
