import userService, { User } from "../../services/user-service";
import useUsers from "../../hooks/useUsers";

const UserList = () => {
	const {
		data: users,
		setData: setUsers,
		error,
		setError,
		isLoading,
		setLoading,
	} = useUsers();

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		setLoading(true);
		userService
			.delete(user.id)
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
		userService
			.create(newUser)
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
		userService
			.update(updatedUser)
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
