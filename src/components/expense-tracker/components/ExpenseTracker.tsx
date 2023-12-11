import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { Expense, ExpenseFormData } from "../constants";

const ExpenseTracker = () => {
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleAddExpense = (expense: ExpenseFormData) => {
		setExpenses(expenses.concat({ ...expense, id: expenses.length + 1 }));
	};

	const handleDeleteExpense = (id: number) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	const visibleExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	return (
		<div className="p-4">
			<div className="mb-5">
				<ExpenseForm onAdd={handleAddExpense} />
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategory={(category) =>
						setSelectedCategory(category)
					}
				/>
			</div>
			<ExpenseList
				onDelete={handleDeleteExpense}
				expenses={visibleExpenses}
			/>
		</div>
	);
};

export default ExpenseTracker;
