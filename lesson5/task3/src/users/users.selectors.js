export const filterTextSelector = (state) => {
  return state.users.filterText;
};

export const usersListSelector = (state) => {
  
  let sortedUsers;
  console.log(sortedUsers)
      if (state.users.filterText.toUpperCase() !== state.users.filterText.toLowerCase()) {
        sortedUsers = state.users.usersList
          .slice()
          .filter((user) =>
            user.name
              .toLowerCase()
              .split("")
              .includes(state.users.filterText.toLowerCase().split("").toString())
          );
      } else {
        sortedUsers = state.users.usersList;
      }
      console.log(sortedUsers)
    return sortedUsers;
  };

