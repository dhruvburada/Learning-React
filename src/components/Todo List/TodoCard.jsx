import React from 'react'

export const TaskCard = ({item,index,deleteTask}) => {
  return (
  <div className="flex items-center gap-2 mt-2"> 
  <div className="bg-black text-white p-3 w-1/2">{item}</div>
  <input type="button" value="Delete" className="bg-red-400 text-white p-3" onClick={()=>deleteTask(index)}/>
  </div>
  )
}
