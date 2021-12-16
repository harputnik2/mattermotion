import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Button.module.scss'

export default function Button({ content, type, color }) {
  return (
    <button className={
      cx(styles.button,
          { [styles.darkButton]: color === 'dark' },
      )
    }
    type={type}
    >
      <span>
        { content }
      </span>
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
}
