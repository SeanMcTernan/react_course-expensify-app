import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense }from './actions/expenses'
import { setTextFilter } from './actions/filters'
import  getVisibleExpenses from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import uuid from "uuid";


const store = configureStore()


store.dispatch(addExpense({ description: 'Gas bill', amount: 2, createdAt: 3 }))
store.dispatch(addExpense({ description: 'Water bill', amount: 1, createdAt: 4 }))
store.dispatch(addExpense({ description: 'Rent', amount: 3, createdAt: 5 }))


// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

// store.dispatch(sortByDate())

// store.dispatch(sortByAmount())


const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))


