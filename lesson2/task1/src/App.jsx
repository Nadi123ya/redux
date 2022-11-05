import React, { Component, useEffect } from "react";
import  { store, increment, decrement } from './index.js'

class App extends Component{
  render() {
    console.log(store.getState())
    const counter = store.getState();
    return (
      <div className="page">
      <div className="counter">
        <span className="counter__result">{counter}</span>
        <div className="counter__actions">
          <button data-action="decrement" className="counter__button" onClick={() => store.dispatch(decrement())}>-</button>
          <button data-action="reset" className="counter__button">Reset</button>
          <button data-action="increment" className="counter__button" onClick={() => store.dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
    );
  }
};

export default App;
