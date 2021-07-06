import React from "react";
import { Route } from "react-router";
// import { Redirect } from "react-router-dom";
// import auth from "./Auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if auth null ostani na url prikazi login
        //if (auth.isAuthenticated()) {
        return <Component {...props} />;
        //}

        // } else if (auth.isAuthenticated() === false) {
        //   return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        // }
      }}
    />
  );
};

export default ProtectedRoute;
