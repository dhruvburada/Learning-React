import { useMemo } from 'react'

const ExpensiveCalculation = () => {


  let computedValue = () =>{
    let sum = 0;
      for (let i = 0; i < 100000000; i++) {
        sum += i;
      }
      return sum;
  }


  computedValue = useMemo(()=>computedValue(),[]);
  return (
    <div>ExpensiveCalculation :{computedValue} </div>
  )
}

export default ExpensiveCalculation

