import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Player } from "../../interfaces/interfaces";

export interface CardProps {}

const Card: React.FC<Player> = ({
  id,
  name,
  nacionality,
  asists,
  goals,
  team,
  position,
  image,
  favourite,
}: Player) => {

  const { state, getPlayers } = useContext(TodoContext);
  const [favFiltered, setFavFiltered] = useState(state.players);
//   const handleStateFav = (id) => {
//     const findPLayer = state.players.find(e => e._id === id);
//     if( findPLayer.favourite === false) {
//       setLocalFav(true)
//     }
// }

  

  const handleFav = (id) => {
    const find = state.players.find(e => e._id === id)
    axios.put(`http://localhost:3002/item/${id}`, find.favourite? {favourite: false} : {favourite: true})
    //const filter = state.players.filter(e => e.favourite === true)
    //setFavFiltered(filter)
    getPlayers()
  } 

  // const handleAddFavourites = (id:any) => {
  //     addFavourites(id)
  // }

  return (
    <div className="flex items-center justify-center px-12 ">
      <div  className={favourite ? "p-8 mt-32 mb-10 w-96 cursor-pointer rounded-3xl bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-600 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl shadow-lg border-solid border-2 border-black" : "p-8 mt-32 mb-10 w-96 cursor-pointer rounded-3xl bg-gray-500 opacity-75 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl shadow-lg border-solid border-2 border-black"}>
        <div className="-mb-20 -translate-y-1/2 transform">
          <img
            src={image}
            alt="Lionel Messi"
            title="Lionel Messi"
            className="mx-auto h-64 rounded-lg border-solid border-2 border-black shadow-2xl shadow-stone-800"
          />
        </div>
        <div className="text-center">
          <h3 className="text-center text-4xl font-bold">{name}</h3>
          <span className="text-sm">{position}</span>
        </div>
        <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
          <li className="flex flex-col">
            <span className="font-bold">Goals</span> {goals}
          </li>
          <li className="mx-6 flex flex-col">
            <span className="font-bold">Asists</span> {asists}
          </li>
          <li className="flex flex-col">
            <span className="font-bold">Team</span> {team}
          </li>
        </ul>
        <div className="text-center">
          {/* <button onClick={() => handleAddFavourites(id)} className="rounded-xl bg-black px-24 py-2 text-white">
            {state.favourites.find(e => e._id === id)? "Added" : "Add to Favourites"} 
          </button> */}
            <button className={favourite ? "bg-white rounded-lg w-36 h-12 border-solid border-2 border-black" : "bg-white rounded-lg w-36 h-12 border-solid border-2 border-black"} 
            onClick={() => {
              handleFav(id)
              }}>
              {favourite ? "Delete Favourite" : "Add Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
