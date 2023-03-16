import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { Player } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { /*todoReducer*/ playerReducer  } from "./todoReducer"
import axios from "axios"

/*const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Recolectar piedras",
            completed: false
        },
        {
            id: "2",
            desc: "Piedras del Alma",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}*/

const INITIAL_STATE: any = {
    players:[]
      /*users: {
        name,
        email
    }*/
}
    
interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props) => {

    /*const [todoState, dispatchToDo] = useReducer(todoReducer, INITIAL_STATE);*/
    const [players, dispatchPlayer] = useReducer(playerReducer, INITIAL_STATE)

  
        const getPlayers = async () => {
                try {
                    const resp = await axios.get("http://localhost:3002/item")
                    return dispatchPlayer({ 
                        type: "players",
                        payload: resp.data
                   } )
                }
                catch(err){
                    console.log(err)
                }
            };
    
    return (
        <TodoContext.Provider value={{getPlayers, players}}>
            {children}
        </TodoContext.Provider>
    )
}