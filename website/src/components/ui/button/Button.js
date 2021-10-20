import React from 'react'
import PropTypes from 'prop-types'

// import cx from 'classnames'

import styles from './Button.module.scss'

export default function Button({ content, type }) {
  return (
    <button className={styles.button} type={type}>
      <span>
        { content }
      </span>
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
}
