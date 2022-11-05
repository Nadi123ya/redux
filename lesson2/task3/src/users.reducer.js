// add a user into the state
// delete a user out of the state

import {ADD_USER, DELETE_USER } from "./users.actions"


const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.slice().concat(action.newUser),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList
          .slice()
          .filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};
