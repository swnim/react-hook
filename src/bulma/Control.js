import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Control = ({ className, children, ...otherProps }) => (
  <div
    {...otherProps}
    className={classnames('control', className)}
  >
    { children }
  </div>
)

Control.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Control