import store from "./store";
import { addProduct, deleteProduct } from "./cart.actions";
import { language } from "./language.actions";
import {setUser, removeUser} from "./user.actions";

store.dispatch(addProduct({id: 1, name: "milk"}));
store.dispatch(deleteProduct({id: 2, name: "sause"}));
store.dispatch(language("jp"));
store.dispatch(setUser({name: "Bob"}));

store.subscribe(() => console.log(store.getState()));