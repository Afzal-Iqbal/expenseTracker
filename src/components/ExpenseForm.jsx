import React, { useState, useRef } from 'react'
import { Button } from './ui/button'

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const titleRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !amount) {
      alert("Please fill all the fields")
      return
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    }

    onAddExpense(newExpense)
    setTitle("")
    setAmount("")
    titleRef.current.focus() // cursor back to the input field
  }

  return (
    <div>
      <form className="mt-4 px-2 sm:px-0" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-2 sm:gap-3 items-center">
          <input
            type="text"
            id="expenseTitle"
            placeholder="Expense Title"
            value={title}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
          <input
            type="number"
            id="expenseAmount"
            placeholder="Amount ₹"
            value={amount}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button className="w-full sm:w-auto bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 font-medium text-sm sm:text-base">
            Add Expense
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm