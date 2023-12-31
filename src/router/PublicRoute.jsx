import React from "react";
import { useSelector } from "react-redux";

import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const PublicRoute = ({ children }) => {
  // const { status } = useCheckAuth();
  const { status } = useSelector((state) => state.auth);
  let ruta = sessionStorage.getItem("Location");
  ruta = ruta ? ruta : "/home";
  return (status === "notLogged") | (status === "checking") ? (
    children
  ) : (
    <Navigate to={ruta}></Navigate>
  );
};
