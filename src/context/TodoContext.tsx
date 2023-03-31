import { createContext } from "react";


export type TodoContextProps = {
    /*todoState: TodoState*/
    state: any
    getPlayers: any
    addFavourites: any
    putPlayer: any
}


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);