import { ChangeEvent } from "react";
import { CATEGORIES } from "../constants";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
		onSelectCategory(e.target.value);

	return (
		<select className="form-select" onChange={handleChange}>
			<option value="">All categories</option>
			{CATEGORIES.map((cat) => (
				<option value={cat} key={cat}>
					{cat}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
