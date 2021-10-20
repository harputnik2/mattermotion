import React from 'react'
import PropTypes from 'prop-types'

import { rootpath } from 'consts'
import styles from './Review.module.scss'

export default function Review({
  author,
  position,
  content,
  logo,
}) {
  return (
    <div className={styles.review}>
      <span className={styles.symbol}></span>
      <p className={styles.content}>
        {content}
      </p>
      <span className={styles.author}>
        {author}
      </span>
      <div className={styles.logo}>
        <img src={rootpath + logo} />
      </div>
    </div>
  )
}

Review.propTypes = {
  author: PropTypes.string,
  position: PropTypes.string,
  content: PropTypes.string,
  logo: PropTypes.string,
}
