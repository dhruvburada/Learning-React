import {useState} from 'react'
import ExpensiveCalculation from './ExpensiveCalculation';


const UseMemoDemo = () => {
 
    const [counter,setCounter] = useState(0);

    return (
        <>
            <div>UseMemo</div>
            <div>Counter {counter}</div>
            <button onClick={()=> setCounter(counter+1)}> Increment</button>
            <ExpensiveCalculation/>
        </>
    )
}

export default UseMemoDemo