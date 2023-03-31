import React, { useEffect } from "react";
import { useContext } from "react";
import Card from "../Card/Card";
import { TodoContext } from "../../context/TodoContext";
export interface CardSectionProps {}

const CardSection: React.FC<CardSectionProps> = () => {
  const { getPlayers, state } = useContext(TodoContext);

  useEffect(() => {
    getPlayers();
  }, []);

  if (state.players.length > 1) {
    return (
      <div id="pasteles" className="bg-gradient-to-bl from-violet-900 to-teal-400">
        <div className="min-h-2 flex flex-col justify-center">
          <div className="relative p-2 w-full sm:max-w-2xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-3">
              <form
                role="form"
                className="relative flex z-50 bg-white rounded-full"
              >
                <input
                  type="text"
                  placeholder="Enter the player name here"
                  className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                  Search
                </button>
              </form>
              <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
              <div className="glow glow-2 z-20 bg-orange-400 absolute"></div>
              <div className="glow glow-3 z-30 bg-purple-600 absolute"></div>
              <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
            </div>
          </div>
        </div>
        <div className="flex w- p-0 justify-between flex-wrap ">
          {state.players.map((e: any) => {
            return (
              <Card
                key={e._id}
                id={e._id}
                name={e.name}
                nacionality={e.nacionality}
                goals={e.goals}
                asists={e.asists}
                position={e.position}
                team={e.team}
                image={e.image}
                favourite={e.favourite}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen bg-indigo-50">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-50 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }
};

export default CardSection;
