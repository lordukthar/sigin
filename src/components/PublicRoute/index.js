import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IsLogin as isLogin } from "../utils";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

 const user = useSelector((state) => state.userReducer)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(user.name) && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
