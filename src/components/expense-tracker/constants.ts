import { z } from "zod";

export const CATEGORIES = [
    "Groceries",
    "Utilities",
    "Entertainment"
] as const

export const schema = z.object({
    description: z
        .string()
        .min(3, { message: "Description should be at least 3 characters." }).max(50),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(0.01, { message: "Amount must be positive" }).max(100_000),
    category: z.enum(CATEGORIES, {
        errorMap: () => ({ message: "Category is required." })
    })
});

export type ExpenseFormData = z.infer<typeof schema>;

export interface Expense extends ExpenseFormData {
    id: number;
}
