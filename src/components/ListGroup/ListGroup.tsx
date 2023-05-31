import { useState } from "react";
import styled from "styled-components";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
	const message = items.length === 0 && <p>No item found</p>;

	const [selectedIndex, setSelectedIndex] = useState(-1);

	// We have another approach for styling our components called CSS in js
	// Beneffits
	// Scoped styles
	// All de CSS & JS/TS code in one place
	// Easier to delete a component
	// Easier to sytle based on props/state
	// Most populear libraries
	// Styled Components => npm i styled-components => npm i @types/styled-components
	// Emotion
	// Polished

	return (
		<>
			<h1>{heading}</h1>
			{message}
			<ul className={[styles.listGroup, styles.container].join(" ")}>
				{items.map((item, index) => {
					const isSelected = selectedIndex === index;
					const activeClassName = isSelected && "active";
					const className = `list-group-item ${
						selectedIndex === index && activeClassName
					}`;
					return (
						<li
							onClick={() => {
								setSelectedIndex(index);
								onSelectItem(item);
							}}
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
