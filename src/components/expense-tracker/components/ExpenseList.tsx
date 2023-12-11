import { Expense } from "../constants";

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (expenses.length === 0) return null;
	const totalAmount = expenses
		.reduce((acc: number, expense: Expense) => acc + expense.amount, 0)
		.toFixed(2);

	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Category</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{expenses.map(
					({ description, amount, category, id }: Expense) => (
						<tr key={id}>
							<td>{description}</td>
							<td>${amount}</td>
							<td>{category}</td>
							<td>
								<button
									onClick={() => onDelete(id)}
									className="btn btn-outline-danger"
								>
									Delete
								</button>
							</td>
						</tr>
					)
				)}
			</tbody>
			<tfoot>
				<tr>
					<td>Total</td>
					<td colSpan={3}>{`$${totalAmount}`}</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;
