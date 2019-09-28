import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Column = ({ span, offset, size, className, children, ...otherProps }) => {
  const classNames = classnames('column', {
    [`is-${span}`]: span,
    [`is-offset-${offset}`]: offset,
    [`is-${size}`]: size,
  }, className)

  return (
    <div
      {...otherProps}
      className={classNames}
    >
      {children}
    </div>
  )
}

Column.propTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  size: PropTypes.oneOf(['full', 'half', 'narrow']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Column