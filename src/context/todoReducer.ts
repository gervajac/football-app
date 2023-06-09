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
                | {type: "GET_FAVOURITES", payload: Player}
                | {type: "REMOVE_TO_FAVOURITES", payload: string}
                | {type: "PUT_PLAYER", payload: Player}

export const playerReducer = (state: any, action: PlayerAction): any => {
    const { type, payload } = action

    switch(type) {
        case "players":
            return {
                ...state,
                players: payload
            }
        case "GET_FAVOURITES":

        const favFiltered = state.players.filter(e => e.favourite === true)
            return {
                ...state,
                favourites: favFiltered
            }
        case "REMOVE_TO_FAVOURITES": 
            const filteredFavourites = state.favourites.filter(element => element._id !== payload)
            return {
                ...state,
                favourites: filteredFavourites
            }
            case "PUT_PLAYER": 
            console.log(payload, "payloadss")


            return {
                ...state,
                players: payload
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