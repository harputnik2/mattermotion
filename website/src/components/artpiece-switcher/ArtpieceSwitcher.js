import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './ArtpieceSwitcher.module.scss'

export default function ArtpieceSwitcher({ category }) {
  return (
    <div className={styles.artpieceSwitcher}>
      <div className={styles.prev}>
        <div className={styles.switchButton}>
          <figure className={styles.circle}></figure>
          <figure className={styles.arrow}></figure>
        </div>
        <span className={styles.action}>PREVIOUS</span>
      </div>
      <div className={styles.next}>
        <div className={styles.switchButton}>
          <figure className={styles.circle}></figure>
          <figure className={styles.arrow}></figure>
        </div>
        <span className={styles.action}>NEXT</span>
      </div>
    </div>
  )
}

ArtpieceSwitcher.propTypes = {
  category: PropTypes.string,
}
