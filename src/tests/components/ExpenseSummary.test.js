import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('Should Render Expense Summary Message', () => {
    const wrapper =  shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should not render any message', () => {
    const wrapper =  shallow(<ExpenseSummary expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})