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
		// const originalUsers = [...users];
		// setUsers(users.filter((u) => u.id !== user.id));
		// axios.delete(USER_ENDPOINT(user.id)).catch((error) => {
		// 	setError(error.message);
		// 	setUsers(originalUsers);
		// });

		setLoading(true);
		try {
			axios.delete(USER_ENDPOINT(user.id)).then(() => {
				setUsers(users.filter((u) => u.id !== user.id));
				setLoading(false);
			});
		} catch (error) {
			setError((error as AxiosError).message);
			setLoading(false);
		} finally {
		}
	};

	const addUser = () => {
		const newUser = { id: 0, name: "Irene" };
		const originalUsers = [...users];
		setUsers([newUser, ...users]);
		setLoading(true);
		axios
			.post(USERS_ENDPOINT, newUser)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users]))
			.catch((error) => {
				setError(error.message);
				setUsers(originalUsers);
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border" />}
			<button className="btn btn-primary mb-3" onClick={addUser}>
				Add User
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
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
