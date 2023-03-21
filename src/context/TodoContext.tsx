import { createContext } from "react";


export type TodoContextProps = {
    /*todoState: TodoState*/
    players?: any
    getPlayers: any
    favourites: any
    addFavourites: any
}


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);