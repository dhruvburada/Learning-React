import {useState} from 'react';
import Temp from './Temp';

const MemoDemo = () => {

  const [counter,setCounter] = useState(0);
  return (
    <div>
    <p>Counter : {counter}</p>
      <input type="button" value="Click Me" onClick={() => setCounter(counter + 1)} />

        <Temp/>
    </div>

  )
}

export default MemoDemo;
