import React from "react";
import { Navigate } from "react-router-dom";
import { IRouteprops } from "../interfaces";
import isLogin from "../utils/isLogin";
import Profile from "../pages/Profile";

const Private = ({ component: RouteComponent }: any) => {
  return isLogin() ? RouteComponent : <Navigate to="/signin" />;
};

export default Private;
