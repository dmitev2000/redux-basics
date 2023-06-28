import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <section>
      <h3>Counter component</h3>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button
          onClick={() => {
            dispatch(reset());
            setAmount(0);
          }}
        >
          Reset
        </button>
        <button disabled={count === 0} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setAmount(+e.target.value)}
          min={0}
          value={amount}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(amount));
            setAmount(0);
          }}
          disabled={amount === 0}
        >
          Increment by {amount}
        </button>
      </div>
    </section>
  );
};

export default Counter;
