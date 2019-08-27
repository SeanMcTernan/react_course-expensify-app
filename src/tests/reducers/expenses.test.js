import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state' , () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})



test('should remove expense by if', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('Should add expense to the array', () => {
    const expense = {
        id: '4',
        description: 'Coffee',
        note: '',
        amount: 4500,
        createdAt: 85000
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})



test('Should edit an expense in the array', () => {
    const updates = {
        id: '1',
        description: 'Tastier Gum',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const  id = { 
        id: 1
    }
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
      }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,
        ...action.updates]
      )
})


test('Should not edit an expense in the array', () => {
    const updates = {
        id: '1',
        description: 'Tastier Gum',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const  id = { 
        id: 7
    }
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
      }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses]
      )
})