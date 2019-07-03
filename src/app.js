import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense }from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import uuid from "uuid";


const store = configureStore()

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30000, createdAt: -1000 }))
store.dispatch(setTextFilter('Bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);



ReactDOM.render(<AppRouter />, document.getElementById('app'))


