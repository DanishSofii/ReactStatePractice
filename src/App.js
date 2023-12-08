import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="stepContainer">
        <button className="dec" onClick={() => setStep((c) => c - 1)}>-</button>
        <span >  Step : {step} </span>
        <button className="inc" onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="countContainer">
        <button className="dec"onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count : {count} </span>
        <button className="inc" onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span className="datecheck">{date.toDateString()}</span>
      </p>
    </div>
  );
}

