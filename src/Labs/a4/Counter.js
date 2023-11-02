import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary " style={{color:'white', background:'green', marginRight:'7px'}} onClick={() => setCount(count + 1)}>Up</button>
      <button className="btn btn-primary mr-2" style={{color:'white', background:'red'}} onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;