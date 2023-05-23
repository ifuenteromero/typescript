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

	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item} className="list-group-item">
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default ListGroup;
