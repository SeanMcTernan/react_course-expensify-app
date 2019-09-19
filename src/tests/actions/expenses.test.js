import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expenseData).then(() => done())
})

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    })
})


test('Should setup edit expense action object', () => {
    const action = editExpense( '123abc', { note: "New Note Value" })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: { note: "New Note Value" }
    })
})


test('should setup add add expense action opject with provided values', () => {
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = { 
        description: 'mouse',
        amount: 3000,
        note: 'New note added',
        createdAt: 1000
     }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
            id: expect.any(String),
            ...expenseData
            }
        })
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData) 
        done()
    })
})


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const defaultValues = 
    {
        description: "", 
        note: "", 
        amount: 0, 
        createdAt: 0
      }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
            id: expect.any(String),
            ...defaultValues
            }
        })
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultValues) 
        done()
    })
})




test('should setup expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})


test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
     type: 'SET_EXPENSES',
     expenses   
    })
    done()
    })
})




test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });

        


    
    
    
    
    
    
   