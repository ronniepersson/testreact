import React from 'react'
import StupidSimple from '../StupidSimple'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = (props) => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <StupidSimple text="hej" {...props} />
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header
