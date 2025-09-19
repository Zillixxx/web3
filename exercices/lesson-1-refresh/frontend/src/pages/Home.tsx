import React, { useState } from "react";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseAdd from "../components/ExpenseAdd";
import type { Expense } from "../types/Expenses";

const Home: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      date: "2024-06-01",
      description: "Groceries",
      payer: "Alice",
      amount: 150.75,
    },
    {
      id: "2",
      date: "2024-06-03",
      description: "Utilities",
      payer: "Bob",
      amount: 80.5,
    },
    {
      id: "3",
      date: "2024-06-05",
      description: "Dining Out",
      payer: "Charlie",
      amount: 60.0,
    },
  ]);

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <ExpenseAdd onAddExpense={handleAddExpense} />

      <h1>Expense Tracker</h1>

      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default Home;
     