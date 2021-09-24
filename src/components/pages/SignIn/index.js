import React from "react";
import { login } from "../../utils";
import { useSelector } from "react-redux";

const SignIn = (props) => {

  const user = useSelector((state) => state.userReducer);

  const handleLogin = (u) => {
    login(u);
    props.history.push("/dashboard");
  };

  return (
    <div>
      <h1>Sign in</h1>

      <button onClick={() => handleLogin(user.name)}>Click here to log in</button>
    </div>
  );
};

export default SignIn;
