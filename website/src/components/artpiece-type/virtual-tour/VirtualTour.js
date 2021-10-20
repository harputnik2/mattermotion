import React from 'react'
import PropTypes from 'prop-types'

import styles from './VirtualTour.module.scss'

export default function VirtualTour({ tour }) {
  console.log(tour)
  return (
    <div className={styles.virtualTour}>
      <iframe
        width='960'
        height='540'
        src={tour}
        frameBorder='0'
        webkitAllowFullscreen
        mozAllowFullscreen
        allowFullScreen
      />
    </div>
  )
}

VirtualTour.propTypes = {
  tour: PropTypes.string,
}
