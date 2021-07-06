import React from "react";
import { Route } from "react-router";

import auth from "./Auth";
import LoginForm from "../LoginForm/LoginForm";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated() === null) {
          return <LoginForm></LoginForm>;
        } else if (auth.isAuthenticated()) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
