import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";


export type TodoContextProps = {
    /*todoState: TodoState*/
    players?: any
    getPlayers: any
}


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);