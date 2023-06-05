import React, { FormEvent, useState, ChangeEvent } from "react";

const Form = () => {
	const initialState = {
		name: "",
		age: "",
	};

	const [person, setPerson] = useState(initialState);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		console.log({ person });
	};

	const handleChange = ({
		target: { id, value },
	}: ChangeEvent<HTMLInputElement>) => {
		setPerson({ ...person, [id]: value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					id="name"
					type="text"
					className="form-control"
					onChange={handleChange}
					value={person.name}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					id="age"
					type="number"
					className="form-control"
					onChange={handleChange}
					value={person.age}
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
