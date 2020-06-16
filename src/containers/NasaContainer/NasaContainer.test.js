import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import NasaContainer from './NasaContainer'
import { DateInput } from 'components'

describe('Layout', () => {
  let wrapper = null
  beforeAll(() => {
    wrapper = mount(
      <Router>
        <NasaContainer />
      </Router>,
    )
  })
  it('should render component', () => {
    expect(wrapper.find(h2)).toBeTruthy()
    expect(wrapper.find(DateInput)).toBeTruthy()
  })
})
