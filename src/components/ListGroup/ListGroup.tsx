import { useState } from "react";
import styled from "styled-components";

interface ListItemProps {
	active: boolean;
}

const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background-color: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

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
			<List>
				{items.map((item, index) => {
					const isSelected = selectedIndex === index;
					return (
						<ListItem
							active={isSelected}
							onClick={() => {
								setSelectedIndex(index);
								onSelectItem(item);
							}}
							key={item}
						>
							{item}
						</ListItem>
					);
				})}
			</List>
		</>
	);
};

export default ListGroup;
