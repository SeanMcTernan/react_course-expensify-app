import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper, expense

beforeEach(() => {
     startRemoveExpense = jest.fn()
     editExpense = jest.fn()
     history = { push: jest.fn() }
     expense = expenses[1]
     wrapper = shallow(
     <EditExpensePage 
     startRemoveExpense={startRemoveExpense} 
     editExpense={editExpense} 
     history={history}
     expense={expenses[1]}
     />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})


test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id })
})