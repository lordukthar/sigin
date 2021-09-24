import { useSelector } from "react-redux";


const Users = () => {

    const user = useSelector((state) => state.userReducer);
    const users = useSelector((state) => state.usersReducer);



  return (
    <div>
      Users: {user.name}
      <ul>
        {users.map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
