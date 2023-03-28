import React, { useEffect } from 'react';
import { useContext } from "react";
import Card from '../Card/Card';
import { TodoContext } from '../../context/TodoContext';
export interface CardSectionProps {}


const CardSection : React.FC<CardSectionProps> = () => {  

	const {getPlayers, state} = useContext(TodoContext);

	useEffect(() => {
		getPlayers()
	}, [])

	if (state.players.length > 1) {  
		return (
		<div id="pasteles" className="bg-indigo-50">
		  <div className="flex w- p-0 justify-between flex-wrap bg-gradient-to-bl from-violet-900 to-teal-400">
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

			  />
			);
		  })}
		</div>
		</div>
		)
		} else {
		  return <div className="flex justify-center items-center h-screen bg-indigo-50">
		  <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 ">
			  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-50 rounded-full border-2 border-white"></div>
		  </div>
	  </div>
		}
  };

export default CardSection;
