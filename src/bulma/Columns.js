import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Columns = ({ mobile, gapless, multiline, centered, vcentered, className, children, ...otherProps }) => {
  const classNames = classnames('columns', {
    'is-mobile': mobile,
    'is-gapless': gapless,
    'is-multiline': multiline,
    'is-centered': centered,
    'is-vcentered': vcentered,
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

Columns.propTypes = {
  mobile: PropTypes.bool,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  centered: PropTypes.bool,
  vcentered: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Columns