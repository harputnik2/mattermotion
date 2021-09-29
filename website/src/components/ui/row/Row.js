import React from 'react'
import PropTypes from 'prop-types'

import styles from './Row.module.scss'

export default function Row({ children }) {
  return (
    <div className={styles.row}>
      { children }
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
}
