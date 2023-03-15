import React from 'react';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';
export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<div>
			<Navbar/>
			<Card/>
		</div>
	);
};

export default Home;
