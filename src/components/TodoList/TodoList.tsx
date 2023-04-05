import React, { /*useEffect*/ } from 'react';
import { User } from '../../interfaces/interfaces';
//import axios from 'axios';
export interface TodoListProps {}

const TodoList : React.FC<User> = ({token}) => {

	// useEffect(() => {
	// 	if(token){
	// 		fetchData(token);
	// 	}
		
	// }, [token])

	// const fetchData = async (token) => {
	// 	const res = await axios.get("http://localhost:3002/api/todos", {
	// 		headers: {
	// 			Authorization: "Bearer " + token,
	// 		}
	// 	});
	// 	console.log(res.data)
	// }

	return <></>;
};

export default TodoList;
