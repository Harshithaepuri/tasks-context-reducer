import { useState, useEffect, useReducer, useCallback } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import {TaskContext} from "./context/TaskContext";
import {taskReducer} from "./reducer/taskReducer";

function App() {
  console.log("App rendered");
  const intialState = {
    tasks : [],
    form : {
      name : "",
      priority : "",
      dueDate : "",
      description : "",
    },

    editing: {
      editingId: null,
      editingName: "",
      editingpriority: "",
      editingdes: "",
    }
  } 
  const [state, dispatch] = useReducer(taskReducer, intialState);
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if(stored){
      dispatch({type: "LOADING", payload: JSON.parse(stored)})
    }
  }, []);

  useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  useEffect(() => {

    async function apiTasks(){
      try{

        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await res.json();
  
      const resOne = data.map((task) => (
        {
          id: task.id,
          name: task.title,
          priority: "medium",
          dueDate: new Date().toISOString().split("T")[0],
          description: "api fetched",
          completed: task.completed,
        }     
      ))
      dispatch({type:"LOADING", payload: resOne})
      }
      catch(err)
      {
        console.error("fetch err:", err);
      }
    }
    apiTasks();

  },[])



  const addTask = useCallback(() => {
    const {name, priority, dueDate, description, completed} = state.form;
    if (!name || !priority || !dueDate || !description) return;

    const newTask = {
      id: Date.now(),
      name,
      priority,
      dueDate: dueDate,
      description,
      completed: false,
    };
    dispatch({type:"ADDTASK", payload: newTask});
  },[state.form]);

  const deleteTask = useCallback((id) => {
    dispatch({type:"DELETETASK", payload: id});
  },[]);

  const editTask = useCallback((task) => {
   dispatch({type:"EDIT_FORM_FIELD", field:"editingId", value:task.id})
   dispatch({type:"EDIT_FORM_FIELD", field:"editingName", value:task.name})
   dispatch({type:"EDIT_FORM_FIELD", field:"editingpriority", value:task.priority})
   dispatch({type:"EDIT_FORM_FIELD", field:"editingdes", value:task.description})
  },[state.editing]);

  const saveTask = useCallback(() => {
    const updated = {
      id: state.editing.editingId,
      name: state.editing.editingName,
      priority: state.editing.editingpriority,
      description: state.editing.editingdes,
    };
  
    dispatch({ type: "SAVETASK", payload: updated });
  
    // clear editing fields
    dispatch({ type: "EDIT_FORM_FIELD", field: "editingId", value: null });
    dispatch({ type: "EDIT_FORM_FIELD", field: "editingName", value: "" });
    dispatch({ type: "EDIT_FORM_FIELD", field: "editingpriority", value: "" });
    dispatch({ type: "EDIT_FORM_FIELD", field: "editingdes", value: "" });
  }, [state.editing]);
  

  const toggleStatus = useCallback((id) => {
   dispatch({type: "TOGGLESTATUS", payload:id});
  },[]);

  let filteredTasks = state.tasks.filter(
    (task) =>
      (filter === "all" || task.priority === filter) &&
      (statusFilter === "all" ||
        (statusFilter === "completed" && task.completed) ||
        (statusFilter === "notcompleted" && !task.completed))
  );

  return (
    <TaskContext.Provider 
    value ={{state, dispatch, addTask, deleteTask, editTask, toggleStatus, saveTask,filter, setFilter, statusFilter, setStatusFilter, filteredTasks}} >
    <div className= "max-w-6xl mx-auto p-4 gap-4">
      <TaskForm />
      <ul className="grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <li key={task.id}>
           
          <TaskItem task ={task}/>
             
          </li>
        ))}
      </ul>
    </div>
    </TaskContext.Provider>
  );
}

export default App;
