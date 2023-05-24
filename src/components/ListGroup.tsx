import { useState } from "react";

const ListGroup = () => {
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

	const message = items.length === 0 && <p>No item found</p>;

	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>List</h1>
			{message}
			<ul className="list-group">
				{items.map((item, index) => {
					const isSelected = selectedIndex === index;
					const activeClassName = isSelected && "active";
					const className = `list-group-item ${
						selectedIndex === index && activeClassName
					}`;
					return (
						<li
							onClick={() => setSelectedIndex(index)}
							key={item}
							className={className}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ListGroup;
