import { useState } from "react";
import { produce } from "immer";

const ToDoList = () => {
	const bugList = [
		{
			id: 1,
			title: "Bug 1",
			fixed: false,
			lastUpdated: {
				date: null,
				author: null,
			},
		},
		{
			id: 2,
			title: "Bug 2",
			fixed: false,
			lastUpdated: {
				author: "",
			},
		},
	];
	const [bugs, setBugs] = useState(bugList);

	const handleClick = (bugId: number) => {
		setBugs(
			produce((draft) => {
				const targetBug = draft.find((bug) => bug.id === bugId);
				if (targetBug) {
					targetBug.fixed = true;
					targetBug.lastUpdated.author = "Irene";
				}
			})
		);
	};

	return (
		<ul>
			{bugs.map((bug) => (
				<li key={bug.id} onClick={() => handleClick(bug.id)}>
					{bug.title}
					{bug.fixed ? ` Fixed by ${bug.lastUpdated.author}` : " New"}
				</li>
			))}
		</ul>
	);
};

export default ToDoList;
