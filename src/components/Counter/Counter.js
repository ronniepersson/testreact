import React from 'react'
import classes from './Counter.scss'
import { FormattedMessage, FormattedNumber } from 'react-intl'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        <FormattedNumber value={props.counter} />
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      <FormattedMessage
        id='INCREMENT_BTN'
        defaultMessage='Increment'
        description='Button text to increment the value of the counter'
      />
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      <FormattedMessage
        id='DOUBLE_BTN'
        defaultMessage='Double value (Async)'
        description='Button text to double the value of the counter'
      />
    </button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
