import React from "react";
import { Navigate } from "react-router-dom";
type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const auth = true; // HERE YOU WILL CHECK IF USER HAVE TOKEN OR NO!
  return auth ? children : <Navigate to={"/login"} />;
};
