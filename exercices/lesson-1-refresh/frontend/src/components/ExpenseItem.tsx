import type { Expense } from "../types/Expenses";
import React from "react";

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div className="expense-item">
        <div className="expense-date">{expense.date}</div>
        <div className="expense-description">{expense.description}</div>
        <div className="expense-payer">Paid by: {expense.payer}</div>
        <div className="expense-amount">${expense.amount.toFixed(2)}</div>
        
    </div>
    );
};

export default ExpenseItem;