import React, { useContext, useEffect } from 'react';
import Fav from '../Fav/Fav';
import { TodoContext } from '../../context/TodoContext';
export interface FavSectionProps {}

const FavSection : React.FC<FavSectionProps> = () => {


	const { getPlayers, getFavourites, state } = useContext(TodoContext);

	useEffect(() => {
	  getPlayers();
	  getFavourites();
	}, []);

	console.log(state.favourites)

	return (
		<div className="bg-gradient-to-bl from-violet-900 to-teal-400 p-5">
		<Fav/>
		</div>
	)
};

export default FavSection;
