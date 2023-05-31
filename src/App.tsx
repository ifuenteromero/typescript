import Button from "./components/Button";

const App = () => {
	const handleClick = () => console.log("click");
	return (
		<div>
			<Button color="primary" onClick={handleClick}>
				My button
			</Button>
		</div>
	);
};

export default App;
