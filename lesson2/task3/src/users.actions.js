//actionCreators - add a user/delete a user

//add - {addUser({id:76, name: "Sarah"})}
//delete - deleteUser(76)

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    newUser,
  };
};
export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};
