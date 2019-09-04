import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenListFilters from './ExpenseListFilters' 
import ExpenseSummary  from './ExpenseSummary'

const ExpenseDashboardPage = () =>  (
    <div>
    <ExpenseSummary />
    <ExpenListFilters />
    <ExpenseList />
    </div>
)

export default ExpenseDashboardPage