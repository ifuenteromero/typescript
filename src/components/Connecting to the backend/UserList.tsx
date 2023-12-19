import axios from "axios";
import { useEffect, useState } from "react";

interface User {
	id: number;
	name: string;
}

const UserList = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");

	const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/xusers";

	useEffect(() => {
		axios
			.get<User[]>(USERS_ENDPOINT)
			.then(({ data: savedUsers }) => setUsers(savedUsers))
			.catch((error) => setError(error.message));
	}, []);

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UserList;
