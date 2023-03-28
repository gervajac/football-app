import { Player } from "../interfaces/interfaces";


/*type TodoAction =
    | {type: "addTodo", payload: Todo}
    | {type: "toggleTodo", payload: {id: string}};
    

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch(type) {
        case "addTodo":
            return {
                ...state,
                todos: [...state.todos, payload]
            }
         case "addTodo":
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        default:

            return state;
    }
}*/

type PlayerAction = 
                {type: "players", payload: Player} 
                | {type: "users", payload: Player}
                | {type: "favourites", payload: string}
                | {type: "REMOVE_TO_FAVOURITES", payload: string}

export const playerReducer = (state: any, action: PlayerAction): any => {
    const { type, payload } = action
   console.log(state, "ESTADO DE PLAYERS 111111111")
    switch(type) {
        case "players":
            return {
                ...state,
                players: payload
            }
        case "favourites":
            const add = state.players.find((item: any) => {
                if(item._id === payload && !state.favourites.some(e => e?._id === payload)){
                    return item
                }
            })
            return {
                ...state,
                favourites: add ? [...state.favourites, add] : state.favourites
            }
        case "REMOVE_TO_FAVOURITES": 
            const filteredFavourites = state.favourites.filter(element => element._id !== payload)
            return {
                ...state,
                favourites: filteredFavourites
            }
        /*case "users":
        return {
            ...state,
            players: payload
        } */  
       default:

            return state;
    }
}