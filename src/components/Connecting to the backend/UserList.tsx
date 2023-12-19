import axios from "axios";
import { useEffect, useState } from "react";

interface User {
	id: number;
	name: string;
}

const UserList = () => {
	const [users, setUsers] = useState<User[]>([]);

	const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios
			.get<User[]>(USERS_ENDPOINT)
			.then(({ data: savedUsers }) => setUsers(savedUsers));
	}, []);

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default UserList;
