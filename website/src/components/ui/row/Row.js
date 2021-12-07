import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Row.module.scss'

export default function Row({ children, padding, forceMobileColumns }) {
  return (
    <div className={
      cx(styles.row,
          { [styles.mediumPadding]: padding === 'medium' },
          { [styles.smallPadding]: padding === 'small' },
          { [styles.forceMobileColumns]: forceMobileColumns },
      )
    }>
      { children }
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  forceMobileColumns: PropTypes.boolean,
}

Row.defaultProps = {
  padding: '',
  forceMobileColumns: false,
}
