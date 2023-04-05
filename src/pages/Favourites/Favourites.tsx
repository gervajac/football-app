import React from 'react';
import { Navbar } from '../../components/Navbar';
import { TodoProvider } from '../../context/TodoProvider';
import { Footer } from '../../components/Footer';
import { FavSection } from '../../components/FavSection';
export interface FavouritesProps {}

const Favourites : React.FC<FavouritesProps> = () => {
	return (
		<TodoProvider>
			<Navbar/>
			<FavSection/>
			<Footer/>
		</TodoProvider>
	)
};

export default Favourites;
