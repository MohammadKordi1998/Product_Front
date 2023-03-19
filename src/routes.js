/* eslint-disable no-unused-vars */
import React from "react";

// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));

// Start User
const Users = React.lazy(() => import("./views/User/view"));
// End User

const routes = [
  { path: "/", exact: true, name: "Home" },

  { path: "/users", exact: true, name: "Users", component: Users },
  // { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
