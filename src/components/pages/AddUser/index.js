import { useEffect, useRef } from "react";
import { changeUser, addUser } from "../../store/AppStore";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
const hasFetched = useRef(false)
const dispatch = useDispatch();


const user = useSelector((state) => state.userReducer);

 const handleSubmit = (event) => {
   event.preventDefault();
   console.log(event.target[0].value);
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
        <input type="text" name="new_name" />
      
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
