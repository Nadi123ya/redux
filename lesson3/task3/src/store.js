import { createStore, combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import languageReducer from "./language.reducer";
import userReduser from "./user.reducer";

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReduser,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
