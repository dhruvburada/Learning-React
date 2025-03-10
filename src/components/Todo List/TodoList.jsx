import React from 'react'
import { TaskCard } from './TodoCard'

const TodoList = ({addTask,deleteTask,list}) => {
  return (
    <div className="mt-5 flex items-center">
        <div>
          {list.map((task, index) => {

            return <TaskCard item={task} key={index} index={index} deleteTask={deleteTask}  />
           
           

          })}
        </div>
      </div>
  )
}

export default TodoList