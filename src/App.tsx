import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";

const App = () => {
	const [isAlertVisible, setAlertVisibility] = useState(false);

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
