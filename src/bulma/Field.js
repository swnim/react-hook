import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Field = ({ className, grouped, children, ...otherProps }) => {
  const classNames = classnames('field', {
      'is-grouped': grouped,
    },
    className
  )

  return (
    <div
      {...otherProps}
      className={classNames}
    >
      { children }
    </div>
  )
}

Field.propTypes = {
  className: PropTypes.string,
  grouped: PropTypes.bool,
  children: PropTypes.node,
}

export default Field