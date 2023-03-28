import React from "react";
import img from "../../assets/messi.png"
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Player } from "../../interfaces/interfaces";

export interface CardProps {}

const Card: React.FC<Player> = ({id, name, nacionality, asists, goals, team, position, image}: Player) => {

  const {addFavourites, state} = useContext(TodoContext)




  const handleAddFavourites = (id:any) => {
      addFavourites(id)
  }


  return (
    <div className="flex items-center justify-center px-12">
      <div className="p-8 mt-32 mb-10 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
        <div className="-mb-20 -translate-y-1/2 transform">
          <img
            src={image}
            alt="Lionel Messi"
            title="Lionel Messi"
            className="mx-auto h-64"
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
          <button onClick={() => handleAddFavourites(id)} className="rounded-xl bg-black px-24 py-2 text-white">
            {state.favourites.find(e => e._id === id)? "Added" : "Add to Favourites"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
