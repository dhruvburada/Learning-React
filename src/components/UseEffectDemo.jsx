import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [counter, setCounter] = useState(0);
  useEffect(()=>{console.log("Counter changed");}, [counter]);
  
  return (
    <>
      <div className="bg-black p-4 text-2xl text-center text-white">Counter App</div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
};

export default UseEffectDemo;
