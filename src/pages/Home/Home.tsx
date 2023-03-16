import React from 'react';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';
import { TodoProvider } from '../../context/TodoProvider';

export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<TodoProvider>
			<Navbar/>
			<Card/>
		</TodoProvider>
	);
};

export default Home;
