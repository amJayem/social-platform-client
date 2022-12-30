import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../hooks/useAuthProvider";
import Spinner from "../hooks/useSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthProvider();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <Spinner />;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
