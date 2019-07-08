import React from 'react'
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
    <h3>{description}</h3>
    <p>Amount: {amount} - Date: {createdAt}</p>
    <button onClick={(e) => {
    dispatch(removeExpense({ id }))
    }}>Remove</button>
    </div>
)


export default connect()(ExpenseListItem)