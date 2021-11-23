import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { categories } from 'consts'

import styles from './CollectionCard.module.scss'

export default function CollectionCard({
  id,
  title,
  description,
  image,
  category,
}) {
  const link = category === categories.VIRTUAL_TOURS ?
    'virtual-tours' :
    category

  return (
    <Link to={`${link}/${id}`} >
      <div className={styles.collectionCard}>
        <div className={styles.cardIllustration}>
          <img src={image} alt='dom' />
        </div>
        <div className={styles.cardDetails}>
          <h6 className={styles.cardTitle}>{title}</h6>
          <p className={styles.cardDescription}>{description}</p>
          <figure className={styles.linkArrow}>
            <span />
            <span />
          </figure>
        </div>
      </div>
    </Link>
  )
}

CollectionCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
}
