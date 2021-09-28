import { useEffect, useRef } from "react";
import { changeUser, addUser } from "../../store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import Input from '../Input/'

const AddUser = () => {
const hasFetched = useRef(false)
const dispatch = useDispatch();


const user = useSelector((state) => state.userReducer);

 const handleSubmit = (event) => {
   event.preventDefault();
   console.log(event.target[1].value);
   dispatch(changeUser(event.target[0].value));
   dispatch(addUser(event.target[0].value));
   
 };


  useEffect(() => {
      if (!hasFetched.current) {
          hasFetched.current = true;

      }
  })
  return (
    <div>
      Add a random user, if you add "Jonas" you will be logged in
      <form onSubmit={handleSubmit}>
      

        <Input
          type={"text"}
          title={"Name"}
          name={"name"}
         placeholder={"Enter your name"}
        />

        <Input
          type={"password"}
          title={"Password"}
          name={"password"}
           placeholder={"Enter your password"}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
