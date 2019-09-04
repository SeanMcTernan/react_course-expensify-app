import totalExpenses from '../../selectors/expense-total'
import expenses from '../fixtures/expenses'



test('should return 0 if no expenses', () => {
    const result = totalExpenses([])
    expect(result).toBe(0)
})


test('should correctly add up Single expenses', () => {
    const result = totalExpenses([expenses[0]])
    expect(result).toBe(195)
})


test('should correctly add up multiple expenses', () => {
    const result = totalExpenses(expenses)
    expect(result).toBe(109695)
})

