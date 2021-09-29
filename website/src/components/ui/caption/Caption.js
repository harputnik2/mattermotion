import React from 'react'
import PropTypes from 'prop-types'

import styles from './Caption.module.scss'

export default function Caption({ content }) {
  return (
    <h2 className={styles.caption}>
      { content }
    </h2>
  )
}

Caption.propTypes = {
  content: PropTypes.string,
}
