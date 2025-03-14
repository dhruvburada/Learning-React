import {memo, useCallback, useState} from 'react'


// eslint-disable-next-line react/display-name
const Button = memo(({children,event}) => {
  if(children === "Increment")
  {
    return (<button className='bg-blue-700 p-4 text-white' onClick={()=>event()} >Increment</button>)
  }
  return (
    <button className='bg-red-700 p-4 text-white' onClick={()=>event()}>Decrement</button>
  )
})


const UseCallBackDemo = () => {
  const [counter,setCounter] = useState(0);
  const increment = useCallback(() => {
    setCounter(counter + 1)
  },[counter]);
  const decrement = useCallback(() => {
    setCounter(counter - 1)
  },[counter]);
  return (
    <>
      <div>useCallBackDemo</div>
      <div>{counter}</div>
      <Button event={increment} >Increment</Button>
      <Button event ={decrement} >Decrement</Button>
    </>

  )
}


export default UseCallBackDemo;

