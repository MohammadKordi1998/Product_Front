/* eslint-disable no-unused-vars */
import React from "react";
import i18n from "./i18n";
// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));

// Start User
const Users = React.lazy(() => import("./views/User/view"));
// End User

const routes = [
  { path: "/", exact: true, name: i18n.t("Home") },

  { path: "/users", exact: true, name: i18n.t("Users"), component: Users },
  // { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
