import { useState } from "react";
import TodoList from "./TodoList";

const TodoInput = () => {
  let [task, setTask] = useState("");
  let [taskList, updateList] = useState([]);

  function addTask() {
    if(task.trim() == "")
    {
      return;
    }
    console.log(task);
    updateList([...taskList, task]);
    console.log("Task added");
  }

  function deleteTask(index){
    let updatedList = taskList.filter((task,taskIndex)=>taskIndex!==index)
    updateList(updatedList)
  }

  return (
    <>
      <div className=" bg-black text-white text-2xl p-6 text-center">
        Todo List
      </div>

<div className="flex justify-center ">
        <div className="flex gap-2 items-center mt-5">
          <input
            type="text"
            placeholder="Enter your task"
            className="border border-black p-3 flex-1"
            value={task} // Controlled input
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-black p-3 text-white cursor-pointer"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>

      <TodoList taskList={taskList} deleteTask={deleteTask} addTask={addTask} list={taskList}/>
    </>
  );
};

export default TodoInput;
