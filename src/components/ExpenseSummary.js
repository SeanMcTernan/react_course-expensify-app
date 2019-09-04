import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import totalExpenses from '../selectors/expense-total'


export const ExpenseSummary = ({ expensesCount ,expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
    <div>
    {
        <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
      }
        </div>
)}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) 

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalExpenses(visibleExpenses)
    }
} 

export default connect(mapStateToProps)(ExpenseSummary)