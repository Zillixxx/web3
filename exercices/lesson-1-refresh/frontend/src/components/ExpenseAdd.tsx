import type { Expense } from "../types/Expenses";
import React from "react";

interface ExpenseAddProps {
  onAddExpense: (expense: Expense) => void;
}
const ExpenseAdd: React.FC<ExpenseAddProps> = ({ onAddExpense }) => {
  const handleAddExpense = () => {


    const payers = ["Bob", "Alice"];
    const randomPayer = payers[Math.floor(Math.random() * payers.length)];


    const newExpense: Expense = {   
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        description: " gngngn",
        payer: randomPayer,
        amount: Math.random() * 100
    };
    onAddExpense(newExpense);
  }
    return (
        <div>
            <button onClick={handleAddExpense}>Add Expense</button>
        </div>
    );
}

export default ExpenseAdd;