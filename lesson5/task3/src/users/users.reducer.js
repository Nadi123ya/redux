import { users } from "./users.js";
import { INPUT_VALUE } from "./users.actions.js";

const initialState = {
  usersList: users,
  filterText: "",
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case INPUT_VALUE: {
      const { value } = action.payload;
      console.log(state.usersList)
      return {
        ...state,
        filterText: value,
        usersList: state.usersList,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
