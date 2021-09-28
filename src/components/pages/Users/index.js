import { useSelector } from "react-redux";


const Users = () => {

    const user = useSelector((state) => state.userReducer);
    const users = useSelector((state) => state.usersReducer);



  return (
    <div>
      Number of users added, this is the latest one: {user.name}
      <ul>
        {users.map((x) => (
          <li key={x.id}>
            {x.name}
            {x.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
