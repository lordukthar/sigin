import { useEffect, useRef } from "react";
import { changeUser, addUser } from "../../store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Input from '../Input/'
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import Divider from "@mui/material/Divider";

const AddUser = () => {
const hasFetched = useRef(false)
const dispatch = useDispatch();


const user = useSelector((state) => state.userReducer);
 const { control } = useForm();


 const handleSubmit = (event) => {
   event.preventDefault();

   var user_name = document.getElementById("user_name").value;
   var user_pwd = document.getElementById("user_pwd").value;

   console.log(document.getElementById("user_name").value);
   dispatch(changeUser(user_name));
   dispatch(addUser(user_name));
   
 };


  useEffect(() => {
      if (!hasFetched.current) {
          hasFetched.current = true;

      }
  })
  return (
    <div>
      <form>
        <Paper>
          <h2> Add a random user, if you add "Jonas" you will be logged in</h2>
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
              <TextField id="user_pwd" value={value} label={"Password"} type="password" />
            )}
          />
          <Divider />
          <Button onClick={handleSubmit}>Click me</Button>
        </Paper>
      </form>
    </div>
  );
};

export default AddUser;
