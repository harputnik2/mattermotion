import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

import { findQuery, getPrevAndNextId } from './utils'

import styles from './ArtpieceSwitcher.module.scss'

export default function ArtpieceSwitcher({ category, id }) {
  const query = findQuery(category)
  const { data } = useQuery(query)

  const arpiecesIds = data && data[category].map(({ id }) => id)

  const nextPrevIds = arpiecesIds && getPrevAndNextId(arpiecesIds, id)

  return (
    <div className={styles.artpieceSwitcher}>
      {
        nextPrevIds && nextPrevIds.prevId !== id && (
          <>
            <Link to={`${nextPrevIds && nextPrevIds.prevId}`} >
              <div className={styles.prev}>
                <div className={styles.switchButton}>
                  <figure className={styles.circle}></figure>
                  <figure className={styles.arrow}></figure>
                </div>
                <span className={styles.action}>
                  PREVIOUS
                </span>
              </div>
            </Link>
            <Link to={`${nextPrevIds && nextPrevIds.nextId}`} >
              <div className={styles.next}>
                <div className={styles.switchButton}>
                  <figure className={styles.circle}></figure>
                  <figure className={styles.arrow}></figure>
                </div>
                <span className={styles.action}>
                  NEXT
                </span>
              </div>
            </Link>
          </>
        )
      }
    </div>
  )
}

ArtpieceSwitcher.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string,
}
