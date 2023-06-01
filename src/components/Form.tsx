import React, { FormEvent, useRef } from "react";

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);

	const person = {
		name: "",
		age: 0,
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		person.name = nameRef?.current?.value || "";
		person.age = parseInt(ageRef?.current?.value || "0");

		console.log({ person });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					ref={nameRef}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					ref={ageRef}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
