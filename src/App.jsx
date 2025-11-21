import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(()=>{
    const savedData = localStorage.getItem("allexpenses")
    return savedData ? JSON.parse(savedData) : [];
  });
  useEffect(() =>{
    localStorage.setItem("allexpenses",JSON.stringify(expenses))
  },[expenses])

  const addExpense = (expense) => {
    setExpenses((previousValue) => [...previousValue, expense]);
  };

  // yaha id huumy epenseItem main mily ga 
  const deleteExpense = (id) => {
    setExpenses((previousValue) =>previousValue.filter((item) => item.id != id) ) // jis id ki value match nhi krye ga wo vlaues aye gi
  }; 

  const totalExpenses = expenses.reduce((sum ,item) => sum + item.amount, 0)

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        💰 Expense Tracker
      </h1>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />

      <div className="font-bold mt-4 text-lg">Total Expense: ₹{totalExpenses.toFixed(2)}</div>
    </div>
  );
}

export default App;
