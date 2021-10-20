import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Caption.module.scss'

export default function Caption({ content, onDark }) {
  return (
    <h2
      className={
        cx(styles.caption,
            { [styles.onDark]: onDark })
      }
    >
      { content }
    </h2>
  )
}

Caption.propTypes = {
  content: PropTypes.string,
  onDark: PropTypes.bool,
}
