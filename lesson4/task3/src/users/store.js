import { createStore, combineReducers } from 'redux';
import pageReducer from './page.reducer';
import usersReducer from './users.reducer';



const reducer = combineReducers({
  users: usersReducer,
  currentPage: pageReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;