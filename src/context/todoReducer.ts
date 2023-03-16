import { TodoState, Todo, Player } from "../interfaces/interfaces";


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

export const playerReducer = (state: Player[], action: PlayerAction): any => {
    switch(action.type) {
        case "players":
            return {
                ...state,
                players: action.payload
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