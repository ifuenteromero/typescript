import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CATEGORIES, ExpenseFormData, schema } from "../constants";

interface Props {
	onAdd: (expense: ExpenseFormData) => void;
}

const ExpenseForm = ({ onAdd }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<form
			onSubmit={handleSubmit((expense) => {
				onAdd(expense);
				reset();
			})}
		>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors?.description && (
					<p className="text-danger">
						{errors?.description?.message}
					</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					type="number"
					id="amount"
					className="form-control"
				/>
				{errors?.amount && (
					<p className="text-danger">{errors?.amount?.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select
					{...register("category")}
					id="category"
					className="form-select"
				>
					<option value=""></option>
					{CATEGORIES.map((cat) => (
						<option key={cat}>{cat}</option>
					))}
				</select>
				{errors?.category && (
					<p className="text-danger">{errors?.category?.message}</p>
				)}
			</div>
			<button disabled={!isValid} className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default ExpenseForm;
