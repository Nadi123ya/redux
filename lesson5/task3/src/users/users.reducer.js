import { users } from "./users.js";
import { INPUT_VALUE } from "./users.actions.js";

const initialState = {
  usersList: users,
  filterText: "",
};

const usersReducer = (state = initialState, action) => {
  console.log(state.filterText);
  console.log(state.usersList);
  switch (action.type) {
    case INPUT_VALUE: {
      const { value } = action.payload;
      let sortedUsers;
      console.log(sortedUsers);
      if (value.toUpperCase() !== value.toLowerCase()) {
        sortedUsers = state.usersList
          .slice()
          .filter((user) =>
            user.name
              .toLowerCase()
              .split("")
              .includes(value.toLowerCase().split("").toString())
          );
      } else {
        sortedUsers = state.usersList;
      }
      console.log(sortedUsers);
      return {
        ...state,
        filterText: value,
        usersList: sortedUsers,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
