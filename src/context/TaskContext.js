import {createContext, useContext} from "react";

export const TaskContext = createContext(null);

export function useTaskContext(){
    return useContext(TaskContext);
}