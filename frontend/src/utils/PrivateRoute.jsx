import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/DataProvider";

/**
 * Career-Bridge style PrivateRoute component
 * Protects routes requiring authentication or specific user roles
 */
export const PrivateRoute = ({ roles, children }) => {
  const { isLoggedIn, role, authChecked } = useData();

  if (!authChecked) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white">
        <span className="animate-spin text-3xl">💨</span>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PrivateRoute;
