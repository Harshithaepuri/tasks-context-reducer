export function taskReducer(state, action) {
    switch(action.type){
      case "LOADING":
        return {...state, tasks : action.payload}
      case "ADDTASK":
        return {...state, tasks: [...state.tasks, action.payload], form:{name:"", priority:"", dueDate:"", description:""}}
      case "DELETETASK":
        return {...state, tasks:state.tasks.filter((task) => task.id !== action.payload)}
      case "SAVETASK":
        return {...state, tasks:state.tasks.map((task) => task.id === action.payload.id ? {...task, ...action.payload}: task)}
      case "TOGGLESTATUS":
        return {...state, tasks:state.tasks.map((task) => task.id === action.payload ? {...task, completed: !task.completed}: task)}
      case "SET_FORM_FIELD":
        return {...state, form:{...state.form, [action.field]: action.value}}
      case "EDIT_FORM_FIELD":
        return {...state, editing:{...state.editing, [action.field]: action.value}}
      default:
        return state;
    }
  }
  