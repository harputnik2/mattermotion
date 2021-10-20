import React from 'react'
import PropTypes from 'prop-types'

import styles from './Animation.module.scss'

export default function Animation({ poster, animation }) {
  return (
    <div className={styles.animation}>
      <video
        className={styles.video}
        muted={true}
        autoPlay={false}
        loop
        poster={poster}
        controls
      >
        <source
          src={animation}
          type="video/mp4"
        />
      </video>
    </div>
  )
}

Animation.propTypes = {
  poster: PropTypes.string,
  animation: PropTypes.string,
}
