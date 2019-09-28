import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({ name, htmlType='text', className, placeholder, ...otherProps }) => {
  const classNames = classnames('input', className)

  return (
    <input
      {...otherProps}
      name={name}
      type={htmlType}
      className={classNames}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  htmlType: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input