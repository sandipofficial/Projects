import './App.css';

import React,  {useState} from "react";

function App() {

    const symbol1 = "-"
    const symbol2 = "+"

    const [count , newCount] = useState(0)
    function incrementCounter(){
        newCount(count+1)
    }
    function decrementCounter(){
        newCount(count-1)
    }

    function handleReset(){
        newCount(0)
    }

  return (
    <div className="App">
      <h2 className="Header">Increment & Decrement</h2>
        <div className="countDisplay">
            <span onClick={decrementCounter} className="sym1">{symbol1}</span>
            <span className="count">{count}</span>
            <span onClick={incrementCounter} className="sym2">{symbol2}</span>
        </div>
        <button className="btn" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
