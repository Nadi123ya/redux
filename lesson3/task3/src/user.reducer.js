import { REMOVE_USER, SET_USER } from "./user.actions";

const user = null;

const usersReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload.userData;
    }
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
};

export default usersReducer;
