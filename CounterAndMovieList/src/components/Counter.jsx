import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} className="btn">-</button>
      <button onClick={() => setCount(count + 1)} className="btn">+</button>
    </div>
  );
}

export default Counter;
