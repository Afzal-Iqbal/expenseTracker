import React from "react";
import ExpenseItems from "./ExpenseItems";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500 mt-4">
        No Expenses yet
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-2" id="expenseList">
      {expenses.map((item) => (
        <ExpenseItems key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;