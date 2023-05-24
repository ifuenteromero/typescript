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

	const handleSelectItem = (item: string) => {
		console.log({ item });
	};

	return (
		<div>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			/>
		</div>
	);
};

export default App;
