import { ChangeEvent, useState } from "react";
import ProductList from "./components/Connecting to the backend/ProductList";

const App = () => {
	const [category, setCategory] = useState("");

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
		setCategory(e.target.value);

	return (
		<div>
			<select className="form-select" onChange={handleChange}>
				<option value=""></option>
				<option value="Clothing">Clothing</option>
				<option value="Household">Household</option>
			</select>
			<ProductList category={category} />
		</div>
	);
};

export default App;
