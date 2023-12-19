import React, { useEffect, useRef } from "react";

const EffectHook = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);

	useEffect(() => {
		document.title = "Irene";
	}, []);

	return (
		<div>
			<input ref={inputRef} type="text" className="form-control" />
		</div>
	);
};

export default EffectHook;
