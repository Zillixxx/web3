import React, { useState } from "react";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseAdd from "../components/ExpenseAdd";
import type { Expense } from "../types/Expenses";

const Home: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

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
     