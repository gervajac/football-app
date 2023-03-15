import React from "react";
import img from "../../assets/messi.png";
export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-bl from-violet-900 to-teal-400">
      <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
        <div className="-mb-20 -translate-y-1/2 transform">
          <img
            src={img}
            alt="Lionel Messi"
            title="Lionel Messi"
            className="mx-auto h-64"
          />
        </div>
        <div className="text-center">
          <h3 className="text-center text-4xl font-bold">Lionel Messi</h3>
          <span className="text-sm">STRIKER</span>
        </div>
        <ul className="mt-16 mb-20 flex justify-center text-center text-2xl">
          <li className="flex flex-col">
            <span className="font-bold">Goals</span> 840
          </li>
          <li className="mx-6 flex flex-col">
            <span className="font-bold">Asists</span> 300
          </li>
          <li className="flex flex-col">
            <span className="font-bold">Team</span> PSG
          </li>
        </ul>
        <div className="text-center">
          <button className="rounded-xl bg-black px-24 py-2 text-white">
            Select player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
