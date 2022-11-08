import { users } from "./users.js";
// import { TOGGLE_OPTION } from "./options.action.js";

const initialState = {
  usersList: users,
  filterText: " ",
};

const usersReducer = (state = initialState, action) => {
  // console.log(state.usersList)
  switch (action.type) {
    // case TOGGLE_OPTION: {
    //   const { optionId } = action.payload;
    //   const newSelectedIds = state.selected.includes(optionId)
    //     ? state.selected.filter((id) => id !== optionId)
    //     : state.selected.concat(optionId);
    //   return {
    //     ...state,
    //     selected: newSelectedIds,
    //   };
    // }
    default:
      return state;
  }
};

export default usersReducer
