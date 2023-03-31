import { useReducer } from "react";
import { Player } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { /*todoReducer*/ playerReducer } from "./todoReducer";
import axios from "axios";

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
  players: [],
  favourites: [],
  /*users: {
        name,
        email
    }*/
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  /*const [todoState, dispatchToDo] = useReducer(todoReducer, INITIAL_STATE);*/
  const [state, dispatch] = useReducer(playerReducer, INITIAL_STATE);
  //const [favourites, dispatchFavourites] = useReducer(playerReducer, INITIAL_STATE);

  const getPlayers = async () => {
    try {
      const resp = await axios.get("http://localhost:3002/item");
      return dispatch({
        type: "players",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addFavourites = async (id:any) => {
    try {
      return dispatch({
        type: "favourites",
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const putPlayer = async (id: string) => {
    console.log(id, "asdddddddddddddddd")
    try {
      const resp = await axios.put(`"http://localhost:3002/item/${id}"`);
      console.log(resp, "respuestass")
      return dispatch({
        type: "PUT_PLAYER",
        payload: resp.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoContext.Provider value={{ getPlayers, state, addFavourites, putPlayer}}>
      {children}
    </TodoContext.Provider>
  );
};
