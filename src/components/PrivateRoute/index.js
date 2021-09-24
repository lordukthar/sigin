import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IsLogin as isLogin } from "../utils";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {


  

    const user = useSelector((state) => state.userReducer)
     console.log("PE "+ JSON.stringify({ ...rest }));
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin(user.name) ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
