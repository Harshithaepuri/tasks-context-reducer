import React , {memo} from "react";
import {useTaskContext} from "../context/TaskContext";

const TaskItem = memo(({task}) => {
  const { state, dispatch, deleteTask, editTask, toggleStatus, saveTask } = useTaskContext();
  console.log("TaskItem rendered:", task.name);
    const isEditing =  state.editing.editingId === task.id;
    return(
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
              {isEditing && (
                <div className="flex flex-col gap-3">
                <input
                type="text"
                placeholder="enter the name"
                value={state.editing.editingName}
                onChange={(e) => dispatch({type:"EDIT_FORM_FIELD", field:"editingName", value:e.target.value})}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              
              />
              <input
                type="text"
                placeholder="enter the priority"
                value={state.editing.editingpriority}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => dispatch({type:"EDIT_FORM_FIELD", field:"editingpriority", value:e.target.value})}
              />
              <input
                type="text"
                placeholder="enter the description"
                value={state.editing.editingdes}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => dispatch({type:"EDIT_FORM_FIELD", field:"editingdes", value:e.target.value})}
              />
              <button onClick={() => saveTask()} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">save</button>
              </div>
              )}   
         <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-gray-800">{task.name}</h1>    
              <div className="flex justify-between mt-2">
            <span className="text-sm font-medium text-gray-500">Priority: {task.priority}</span>
            <span className="text-sm font-medium text-gray-500">Due: {task.dueDate}</span>
          </div>
              <p className="text-gray-600">{task.description}</p>
              <div className="flex gap-4">
              <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">Delete</button>
              <button onClick={() => editTask(task)} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">Edit</button>
              <button onClick={() => toggleStatus(task.id)} className={`text-sm font-semibold mt-1 ${task.completed ? "text-green-600" : "text-red-600"}`}>{task.completed ? "completed" : "notcompleted"}</button>
              </div>
              </div>
              </div>
    )
})

export default TaskItem;