import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './FullscreenOverlay.module.scss'

export default function FullscreenOverlay({ children, setFullscreen }) {
  return (
    <div className={styles.fullscreenOverlay}>
      <div className={styles.exitFullScreenHolder}>
        <span
          className={styles.exitFullScreen}
          onClick={() => setFullscreen(false)}
        >
          <span className={styles.fullScreenIcon}>
            <span></span>
            <span></span>
          </span>
          <span className={styles.fullScreenText}>exit full screen</span>
        </span>
      </div>
      { children }
    </div>
  )
}

FullscreenOverlay.propTypes = {
  children: PropTypes.node,
  setFullscreen: PropTypes.any,
}
