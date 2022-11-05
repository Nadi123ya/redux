import store from "./store";
import { addProduct, removeProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";
import {setUser, removeUser} from "./user.actions";

console.log(store.getState());
store.dispatch(addProduct({id: 1, name: "milk"}));
store.dispatch(addProduct({id: 2, name: "cheese"}));
console.log(store.getState());
store.dispatch(removeProduct(2));
store.dispatch(setLanguage("jp"));
store.dispatch(setLanguage("ua"));
console.log(store.getState());
store.dispatch(setUser({name: "Bob"}));

store.subscribe(() => console.log(store.getState()));