import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
	onClick: () => void;
}

const Like = ({ onClick }: Props) => {
	const [isLiked, setIsLiked] = useState(false);

	const togleLike = () => setIsLiked((prevState) => !prevState);
	const handleClick = () => {
		togleLike();
		console.log({ isLiked });
		onClick();
	};

	console.log({ isLiked3: isLiked });

	const IconName = isLiked ? AiFillHeart : AiOutlineHeart;
	return (
		<IconName
			color="#ff6b81"
			size={20}
			onClick={() => {
				handleClick();
				console.log({ isLiked2: isLiked });
			}}
		/>
	);
};

export default Like;
