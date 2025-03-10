
import { useState } from 'react'

const BgChanger = () => {
  const [color,changeColor] = useState("white");
  return (
    <div style={{backgroundColor:color}} className='w-full h-screen' >
      <div className='bg-black rounded-3xl mx-5  flex justify-between p-5'>
      <button className='border-2 border-black p-2 rounded-4xl bg-white ' onClick={() => changeColor('blue')}>Change to Blue</button>
      <button className='border-2 border-black p-2 rounded-4xl bg-white ' onClick={() => changeColor('red')}>Change to Red</button>
      <button className='border-2 border-black p-2 rounded-4xl bg-white ' onClick={() => changeColor('green')}>Change to Green</button>
      <button className='border-2 border-black p-2 rounded-4xl bg-white ' onClick={() => changeColor('yellow')}>Change to Yellow</button>
      </div>
      

    </div>
  )
}

export default BgChanger;