import Button from "./components/Button";
import Like from "./components/Like";

const App = () => {
	const handleClick = () => console.log("click");
	return (
		<div>
			<Like onClick={handleClick} />
		</div>
	);
};

export default App;
