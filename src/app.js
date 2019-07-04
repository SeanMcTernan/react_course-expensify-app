import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense }from './actions/expenses'
import { setTextFilter } from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import uuid from "uuid";


const store = configureStore()

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 30000, createdAt: -1000 }))
store.dispatch(setTextFilter('Water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))


