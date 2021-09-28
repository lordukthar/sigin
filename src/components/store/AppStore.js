import { combineReducers } from "redux";

const INCREMENT_AGE = "INCREMENT_AGE";
const CHANGE_NAME = "CHANGE_NAME";
const ADD_USER = "ADD_USER";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

export function changeUser(user) {
  return {
    type: CHANGE_NAME,
    user,
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  }
}

export function incrementAge(user) {
  console.log(JSON.stringify(user));
  return {
    type: INCREMENT_AGE,
    user,
  };
}

const defaultUser = {
  name: "unknown",
  age: 35,
};

const defaultUsers = [
 
];

function userReducer(state = defaultUser, action) {
  console.log(action);

  switch (action.type) {
    case CHANGE_NAME:
      return {
        name: action.user,
        age: state.age,
      };

    case INCREMENT_AGE:
      var a = Number(action.user.age);
      console.log(a);
      return {
        name: action.user.name,
        age: action.user.age + 1,
      };
    default:
      return state;
  }
}

function usersReducer(state = defaultUsers, action) {

  var idArray = state.map(function (el) {
    return el.id;
  });

  var a =  idArray.length == 0 ? 0 : Number(Math.max(...idArray));
  var max = Number.isNaN(a) ? 1 : Number(a);
 
  switch (action.type) {

    case ADD_USER:
       return [
         ...state,
         {
           name: action.user,
           id: max+1,
         },
       ];
  
    default:
      return state;
  }
}

function jalla(state = defaultUser, action) {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
}

const userApp = combineReducers({
  userReducer: userReducer,
  usersReducer: usersReducer,
  jalla: jalla
});

export default userApp;
