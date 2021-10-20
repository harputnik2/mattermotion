import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Column.module.scss'

export default function Column({ children, padding, rowLimit }) {
  return (
    <div className={
      cx(styles.column,
          { [styles.mediumPadding]: padding === 'medium' },
          { [styles.smallPadding]: padding === 'small' },
          { [styles.threeInRow]: rowLimit === 3 },
      )
    }>
      { children }
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  rowLimit: PropTypes.number,
}
