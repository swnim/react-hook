import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({ htmlType, color, className, children, ...otherProps }) => {
  const classNames = classnames('button', {
    [`is-${color}`]: color,
  }, className)

  return (
    <button
      {...otherProps}
      type={htmlType}
      className={classNames}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  htmlType: PropTypes.string,
  color: PropTypes.oneOf(['white', 'light', 'dark', 'black', 'text', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Button