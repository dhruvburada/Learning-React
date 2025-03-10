import React, { useEffect, useState } from "react";


const Timer = () => {

    
const [second, setSecond] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
},[]);

  return (
    <div>
      <h1>Timer</h1>
      <p>This is a simple timer application.</p>
      <p>Time elapsed: {second} seconds</p>
    </div>
  );
};

export default Timer;
