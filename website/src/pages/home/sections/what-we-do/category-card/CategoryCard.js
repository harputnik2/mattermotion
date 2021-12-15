import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './CategoryCard.module.scss'

export default function CategoryCard({
  categoryName,
  categoryTeaser,
  categoryVideo,
}) {
  return (
    <div className={styles.categoryLinkHolder}>
      <Link to={categoryName.toLowerCase().replace(' ', '-')} >
        <div className={styles.categoryLinkElements}>
          <div className={styles.graphicHolder}>
            <div className={styles.graphic}>
              <video muted={true} autoPlay={true} loop>
                <source src={categoryVideo} type="video/mp4" />
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
      </Link>
    </div>
  )
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string,
  categoryTeaser: PropTypes.string,
  categoryVideo: PropTypes.string,
}
