import React from 'react'
import PropTypes from 'prop-types'

import styles from './Column.module.scss'

export default function Column({ children }) {
  return (
    <div className={styles.column}>
      { children }
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node,
}
