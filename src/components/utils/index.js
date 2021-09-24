import { useSelector } from "react-redux"; 
const TOKEN_KEY = "jwt";


export const login = (u) => {
  localStorage.setItem(TOKEN_KEY, u);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const IsLogin = (u) => {

    console.log("IsLogin" + u);
  
  /**  if (localStorage.getItem(TOKEN_KEY) === 'Jonas') {
    return true;
  } */

if (u === 'Jonas') {
    return true;
}

  return false;
};
