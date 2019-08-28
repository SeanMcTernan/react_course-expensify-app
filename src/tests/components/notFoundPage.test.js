import React from 'react'
import { shallow } from 'enzyme'
import { NotFoundPage } from '../../components/NotFoundPage'

test('Should render Expense Not Found Page correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})