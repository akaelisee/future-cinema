import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any
}

export default PrivateRoute
