import {store} from "./counter";
import { increment, decrement } from "./counter";

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

store.subscribe(() => console.log(store.getState()));