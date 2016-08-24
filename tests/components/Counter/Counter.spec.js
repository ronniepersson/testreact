import React from 'react'
import { bindActionCreators } from 'redux'
import { Counter } from 'components/Counter/Counter'
import { shallow } from 'enzyme'

describe('(Component) Counter', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      counter: 5,
      ...bindActionCreators({
        doubleAsync: (_spies.doubleAsync = sinon.spy()),
        increment: (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Counter {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should render with an <h2> that includes Sample Counter text.', () => {
    expect(_wrapper.find('h2').text()).to.match(/Counter:/)
  })

  it('Should render exactly two buttons.', () => {
    expect(_wrapper.find('button')).to.have.length(2)
  })

  describe('An increment button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    })

  })

  describe('A Double (Async) button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Double (Async)')
    })

  })
})
