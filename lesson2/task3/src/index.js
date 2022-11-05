import store from "./store";
import { addUser, deleteUser } from "./users.actions.js";
//add - {addUser({id:76, name: "Sarah"})}
//delete - deleteUser(76)

console.log(store.dispatch(addUser({ id: 76, name: "Sarah" })));
console.log(store.dispatch(addUser({ id: 77, name: "Bob" })));
console.log(store.dispatch(deleteUser(76)));
console.log(store.getState());

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
