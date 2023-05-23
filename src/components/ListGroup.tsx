import { MouseEvent } from "react";

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

	// event handler
	const handleClick = (event: MouseEvent) => console.log(event.target);

	return (
		<>
			<h1>List</h1>
			{message}
			<ul className="list-group">
				{items.map((item) => (
					<li
						onClick={handleClick}
						key={item}
						className="list-group-item"
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default ListGroup;
