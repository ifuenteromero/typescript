import ListGroup from "./components/ListGroup";

const App = () => {
	const items = [
		"Abuja",
		"Port Harcourt",
		"London",
		"Paris",
		"Madrid",
		"Ibiza",
		"Dakar",
		"San Juan",
	];

	return (
		<div>
			<ListGroup items={items} heading="Cities" />
		</div>
	);
};

export default App;
