import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './FullscreenOverlay.module.scss'

export default function FullscreenOverlay({ children, setFullscreen }) {
  return (
    <div className={styles.fullscreenOverlay}>
      <span
        className={styles.exitFullScreen}
        onClick={() => setFullscreen(false)}
      >
        exit full screen
      </span>
      { children }
    </div>
  )
}

FullscreenOverlay.propTypes = {
  children: PropTypes.node,
  setFullscreen: PropTypes.any,
}
