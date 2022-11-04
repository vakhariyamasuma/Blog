import React from "react";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  let isLoggedInUser = localStorage.getItem("userData");
  return isLoggedInUser ? children : <Navigate to="/login" replace />;
}
