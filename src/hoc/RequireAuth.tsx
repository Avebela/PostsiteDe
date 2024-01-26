import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "../hook/useAuth";
type Props = {
  children: React.ReactNode;
};
const RequireAuth = ({ children }: Props) => {
  const location = useLocation();
  const auth = false;
  // const { user } = useAuth();

  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }
  return children;
};

export { RequireAuth };
