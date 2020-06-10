import React from 'react'
import { shallow } from 'enzyme'

import { PaginationControl } from '../PaginationControl.component'

describe('PaginationControl', () => {
  let mockProps
  beforeEach(() => {
    mockProps = {
      currentPage: 1,
      incrementPage: jest.fn(),
      hasMorePages: true,
      decrementPage: jest.fn()
    }
  })
  
  it('should render', () => {
    const wrapper = shallow(<PaginationControl {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with only right arrow when current page is 1', () => {
    const wrapper = shallow(<PaginationControl {...mockProps} />)
    expect(wrapper.find({ title: 'Previous Page' }).length).toEqual(0)
    expect(wrapper.find({ title: 'Next Page' }).length).toEqual(1)
  })

  it('should render with only left arrow when hasMorePages is false and currentPage is more than 1', () => {
    mockProps.currentPage = 2
    mockProps.hasMorePages = false
    const wrapper = shallow(<PaginationControl {...mockProps} />)
    expect(wrapper.find({ title: 'Previous Page' }).length).toEqual(1)
    expect(wrapper.find({ title: 'Next Page' }).length).toEqual(0)
  })

  it('should call decrementPage when left arrow is clicked', () => {
    mockProps.currentPage = 2
    const wrapper = shallow(<PaginationControl {...mockProps} />)
    wrapper.find({ title: 'Previous Page' }).simulate('click')
    expect(mockProps.decrementPage).toHaveBeenCalled()
  })
  it('should call incrementPage when right arrow is clicked', () => {
    const wrapper = shallow(<PaginationControl {...mockProps} />)
    wrapper.find({ title: 'Next Page' }).simulate('click')
    expect(mockProps.incrementPage).toHaveBeenCalled()
  })
})
