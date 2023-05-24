import { useState } from "react";
interface Props {
	items: string[];
	heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
	const message = items.length === 0 && <p>No item found</p>;

	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
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
