function ExpenseItems({ item, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded shadow">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-4 w-full">
        <span className="font-medium">{item.title}</span>
        <span className="text-gray-700">₹{item.amount}</span>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="text-red-500 text-lg font-bold hover:text-red-700 ml-4"
      >
        ×
      </button>
    </li>
  );
}

export default ExpenseItems;