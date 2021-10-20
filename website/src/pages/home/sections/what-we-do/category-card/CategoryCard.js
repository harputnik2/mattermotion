import React from 'react'
import PropTypes from 'prop-types'

import { rootpath } from 'consts'
import styles from './CategoryCard.module.scss'

export default function CategoryCard({
  categoryName,
  categoryTeaser,
  categoryVideo,
}) {
  return (
    <div className={styles.categoryLinkHolder}>
      <div className={styles.categoryLinkElements}>
        <div className={styles.graphicHolder}>
          <div className={styles.graphic}>
            <video muted={true} autoPlay={true} loop>
              <source src={rootpath + categoryVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.title}>
          <h3>{categoryName}</h3>
          <figure className={styles.linkArrow}>
            <span />
            <span />
          </figure>
        </div>
        <div className={styles.description}>
          <p>{categoryTeaser}</p>
        </div>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string,
  categoryTeaser: PropTypes.string,
  categoryVideo: PropTypes.string,
}
