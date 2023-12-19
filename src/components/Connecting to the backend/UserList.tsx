import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
	id: number;
	name: string;
}

const UserList = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		const controller = new AbortController();
		const config = { signal: controller.signal };

		// axios
		// 	.get<User[]>(USERS_ENDPOINT, config)
		// 	.then(({ data: savedUsers }) => setUsers(savedUsers))
		// 	.catch((error) => {
		// 		if (error instanceof CanceledError) return;
		// 		setError(error.message);
		// 	});
		const getUsers = async () => {
			try {
				setLoading(true);
				const { data: savedUsers } = await axios.get(
					USERS_ENDPOINT,
					config
				);
				setUsers(savedUsers);
			} catch (error) {
				if (error instanceof CanceledError) return;
				setError((error as AxiosError).message);
			} finally {
				setLoading(false);
			}
		};
		getUsers();
		return () => controller.abort();
	}, []);

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border" />}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UserList;