import React, { useState } from "react";

function SimsonsCard({ img, firstname, lastname }) {
  const [theme, setTheme] = useState("pink");
  const [count, setCount] = useState(0);

  return (
    <div className={`SimsonsCard ${theme}`}>
      <div>
        <img src={img} alt="Simson" />
      </div>
      <p>
        {firstname} , {lastname}
      </p>
      <select onChange={(event) => setTheme(event.target.value)} className="theme">
        <option value="pink">pink</option>
        <option value="blue">blue</option>
        <option value="purple">purple</option>
      </select>
      <div>
        <h4>Set An Age:{count}</h4>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default SimsonsCard;
