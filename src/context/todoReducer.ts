import { Player } from "../interfaces/interfaces";


/*type TodoAction =
    | {type: "addTodo", payload: Todo}
    | {type: "toggleTodo", payload: {id: string}};
    

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch(action.type) {
        case "addTodo":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
         case "addTodo":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:

            return state;
    }
}*/

type PlayerAction = 
                {type: "players", payload: Player} 
                | {type: "users", payload: Player}
                | {type: "favourites", payload: Player}

export const playerReducer = (state: any, action: PlayerAction): any => {
   console.log(state.players, "ESTADO DE PLAYERS 111111111")
    switch(action.type) {
        case "players":
            return {
                ...state,
                players: action.payload
            }
        case "favourites":

        console.log(state.players, "ESTADO DE PLATYERS 22222222")
        const add = state.players.find((item: any) => item.id === action.payload)

           console.log(add, "ADD LOG")
            
            return {
                ...state,
            }
        /*case "users":
        return {
            ...state,
            players: action.payload
        } */  
       default:

            return state;
    }
}