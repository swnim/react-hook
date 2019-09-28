import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Box = ({ className, children, ...otherProps }) => {
  const classNames = classnames('box', className)

  return (
    <div
      {...otherProps}
      className={classNames}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Box