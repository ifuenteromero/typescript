import { useState } from "react";

interface Props {
	maxChars?: number;
	children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
	if (children.length <= maxChars) return <p>{children}</p>;

	const [isSumarized, setIsSumarized] = useState(true);
	const buttonText = isSumarized ? "More" : "Less";

	const toggleIsSummarized = () => setIsSumarized((prevState) => !prevState);

	const summarizeText = (string: string, maxCharacters: number) =>
		`${string.substring(0, maxCharacters)}...`;

	const text = isSumarized ? summarizeText(children, maxChars) : children;

	return (
		<>
			<p>{text}</p>
			<button onClick={toggleIsSummarized}>{buttonText}</button>
		</>
	);
};

export default ExpandableText;
