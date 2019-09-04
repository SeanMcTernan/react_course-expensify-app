const totalExpenses = (filteredExpenses) => (filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0))

export default totalExpenses


