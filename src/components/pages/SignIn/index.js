import React from "react";
import { login } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import Divider from "@mui/material/Divider";
import { changeUser, addUser } from "../../store/AppStore";

const SignIn = (props) => {

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
   const { control } = useForm();

  const handleLogin = (u) => {
    login(u);
    props.history.push("/dashboard");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var user_name = document.getElementById("user_name").value;
    var user_pwd = document.getElementById("user_pwd").value;

    console.log(document.getElementById("user_name").value);
    dispatch(changeUser(user_name));
    dispatch(addUser(user_name));

    handleLogin(user_name);
  };


  return (
    <div>
      <h1>Sign in</h1>
      <div>
        <form>
          <Paper>
            <h2>
              {" "}
              If you use "Jonas" you will be logged in
            </h2>
            <Controller
              name={"textValue"}
              control={control}
              render={({ field: { value } }) => (
                <TextField id="user_name" value={value} label={"User name"} />
              )}
            />
            <Divider />
            <Controller
              name={"textValue"}
              control={control}
              render={({ field: { value } }) => (
                <TextField
                  id="user_pwd"
                  value={value}
                  label={"Password"}
                  type="password"
                />
              )}
            />
            <Divider />
            <Button onClick={handleSubmit}>Click me</Button>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
