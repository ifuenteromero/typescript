import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";

interface User {
	id: number;
	name: string;
}

const UserList = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const USERS_ENDPOINT = "/users";
	const USER_ENDPOINT = (id: number) => `/users/${id}`;

	useEffect(() => {
		const controller = new AbortController();
		const config = { signal: controller.signal };
		setLoading(true);
		apiClient
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
		setLoading(true);
		apiClient
			.delete(USER_ENDPOINT(user.id))
			.catch((error) => {
				setError(error.message);
				setUsers(originalUsers);
			})
			.finally(() => setLoading(false));
		// setLoading(true);
		// try {
		// 	axios.delete(USER_ENDPOINT(user.id)).then(() => {
		// 		setUsers(users.filter((u) => u.id !== user.id));
		// 		setLoading(false);
		// 	});
		// } catch (error) {
		// 	setError((error as AxiosError).message);
		// 	setLoading(false);
		// } finally {
		// }
	};

	const addUser = () => {
		const newUser = { id: 0, name: "Irene" };
		const originalUsers = [...users];
		setUsers([newUser, ...users]);
		setLoading(true);
		apiClient
			.post(USERS_ENDPOINT, newUser)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users]))
			.catch((error) => {
				setError(error.message);
				setUsers(originalUsers);
			})
			.finally(() => setLoading(false));
	};

	const updateUser = (user: User) => {
		const updatedUser = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
		const originalUsers = [...users];
		setLoading(true);
		apiClient
			.patch(USER_ENDPOINT(user.id), updatedUser)
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

						<div className="d-flex gap-2">
							<button
								className="btn btn-outline-secondary"
								onClick={() => updateUser(user)}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default UserList;
