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
		onClick();
	};

	const IconName = isLiked ? AiFillHeart : AiOutlineHeart;
	return <IconName color="#ff6b81" size={20} onClick={handleClick} />;
};

export default Like;
