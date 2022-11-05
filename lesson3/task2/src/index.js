import "./index.scss";
import store, { increment, decrement, reset } from "./counter";


const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const resetBtn = document.querySelector(`[data-action="reset"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

console.log()

store.subscribe(() => {
  const state = store.getState();
  const currentValue =+ state;
  resultElem.textContent = currentValue;


});
// import store from "./counter";
// import { increment, decrement, reset } from "./counter";

// store.subscribe(() => console.log(store.getState()));