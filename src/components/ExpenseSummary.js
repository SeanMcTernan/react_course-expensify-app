import React from 'react'
import { connect } from 'react-redux'

import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import totalExpenses from '../selectors/expense-total'


export const ExpenseSummary = (props) => (
    <div>
    {props.expenses.length > 0 && 
        <p>Viewing {props.expenses.length} {props.expenses.length > 1 ? 'expenses' : 'expense' } totaling {numeral(totalExpenses(props.expenses) / 100).format('$0,0.00')}</p>
      }
        </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
} 

export default connect(mapStateToProps)(ExpenseSummary)