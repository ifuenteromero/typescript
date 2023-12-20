import PostList from "./components/Connecting to the backend/PostList";
import UserList from "./components/Connecting to the backend/UserList";

const App = () => {
	return (
		<div className="d-flex flex-column gap-5">
			<div>
				<UserList />
			</div>
			<div>
				<PostList />
			</div>
		</div>
	);
};

export default App;
