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
	const USER_ENDPOINT = (id: number) =>
		`https://jsonplaceholder.typicode.com/users/${id}`;

	useEffect(() => {
		const controller = new AbortController();
		const config = { signal: controller.signal };
		setLoading(true);
		axios
			.get<User[]>(USERS_ENDPOINT, config)
			.then(({ data: savedUsers }) => setUsers(savedUsers))
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
			})
			.finally(() => setLoading(false));
		// const getUsers = async () => {
		// 	try {
		// 		setLoading(true);
		// 		const { data: savedUsers } = await axios.get(
		// 			USERS_ENDPOINT,
		// 			config
		// 		);
		// 		setUsers(savedUsers);
		// 	} catch (error) {
		// 		if (error instanceof CanceledError) return;
		// 		setError((error as AxiosError).message);
		// 	} finally {
		// 		setLoading(false);
		// 	}
		// };
		// getUsers();
		return () => controller.abort();
	}, []);

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		axios.delete(USER_ENDPOINT(user.id)).catch((error) => {
			setError(error.message);
			setUsers(originalUsers);
		});
	};

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border" />}
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}{" "}
						<button
							className="btn btn-outline-danger"
							onClick={() => deleteUser(user)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default UserList;
