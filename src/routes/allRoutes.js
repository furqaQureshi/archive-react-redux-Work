import React from "react";
import { Redirect } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Dialers from "../pages/Dialers/Dialers";
import AddDialers from "../pages/Dialers/AddDialers";
import UpdateDialer from "../pages//Dialers/UpdateDialer";
import Servers from "../pages/Servers/Servers";
import AddServers from "../pages/Servers/AddServers";
import UpdateServer from "../pages/Servers/UpdateServer";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ViewProfile from "../pages/Profile/ViewProfile";
import Change_Password from "../pages/Profile/ChangePassword";
import User from "../pages/Users/User";
import AddUser from "../pages/Users/AddUser";
import UpdateUserData from "../pages/Users/UpdateUserData";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/add-dialers", component: AddDialers },
  { path: "/dialers", component: Dialers },
  { path: "/update-dialer", component: UpdateDialer },
  { path: "/servers", component: Servers },
  { path: "/add-servers", component: AddServers },
  { path: "/update-server", component: UpdateServer },
  { path: "/view-profile", component: ViewProfile },
  { path: "/change-password", component: Change_Password },
  { path: "/user", component: User },
  { path: "/addUser", component: AddUser },
  { path: "/update-user", component: UpdateUserData },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
];

export { userRoutes, authRoutes };
