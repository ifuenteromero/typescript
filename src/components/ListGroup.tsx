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

	const message = items.length === 0 ? <p>No item found</p> : null;

	return (
		<>
			<h1>List</h1>
			{message}
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
