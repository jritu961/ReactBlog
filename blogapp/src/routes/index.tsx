import React from "react";
import { Routes, Route } from "react-router-dom";
import MainSection from "../pages/MainSection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { IRoute } from "../interfaces";
import Public from "./public.routes";
import Private from "./private.routes";
import { ChangePass } from "../component/changePass";
import { Editor } from "@tinymce/tinymce-react";
import Loader from "../component/Loader";
import ShowContent from '../component/showContent/index'
import Chat from "../pages/Chat";
import Avtar from "../pages/Avtar";
const myroute = [
  {
    path: "/",
    component: <MainSection />,
    restricted: false,
  },
  {
    path: "/signin",
    component: <Login />,
    restricted: false,
  },
  {
    path: "/signup",
    component: <Register />,
    restricted: false,
  },
  {
    path: "/profile",
    component: <Profile />,
    restricted: true,
  },
  {
    path: "/changePass",
    component: <ChangePass />,
    restricted: false,
  },
  {
    path: "/showContent/:id",
    component:<ShowContent />,
    restricted: false,
  },
  {
    path: "/loader",
    component:<Loader />,
    restricted: false,
  },
  {
    path: "/chat",
    component:<Chat />,
    restricted: false,
  },
  {
    path: "/avtar",
    component:<Avtar />,
    restricted: false,
  },
];

const RouteComponent = () => (
  <Routes>
    {myroute.map((route: IRoute, index: number) => {
      const { path, component, restricted } = route;
      return (
        <Route
          key={index}
          path={path}
          element={
            restricted ? (
              <Private component={component} />
            ) : (
              <Public component={component} />
            )
          }
        />
      );
    })}
  </Routes>
);

export default RouteComponent;
