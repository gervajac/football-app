import React from 'react';
import { CardSection } from '../../components/CardSection';
import { Navbar } from '../../components/Navbar';
import { TodoProvider } from '../../context/TodoProvider';
import { Footer } from '../../components/Footer';

export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<TodoProvider>
			<Navbar/>
			<CardSection/>
			<Footer/>
		</TodoProvider>
	);
};

export default Home;
