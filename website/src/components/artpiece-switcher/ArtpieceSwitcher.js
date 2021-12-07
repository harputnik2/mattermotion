import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

import {
  categories,
  VISUALIZATIONS_IDS,
  ANIMATIONS_IDS,
  VIRTUAL_TOURS_IDS,
} from 'consts'

import styles from './ArtpieceSwitcher.module.scss'

const findQuery = (category) => {
  return category === categories.VISUALIZATIONS ?
    VISUALIZATIONS_IDS :
    category === categories.ANIMATIONS ?
      ANIMATIONS_IDS :
      VIRTUAL_TOURS_IDS
}

const getPrevAndNextId = (idsArray, currentId) => {
  const idsArrayLength = idsArray.length
  const currentIdIndex = idsArray.indexOf(currentId)

  const prevIdIndex = currentIdIndex === 0 ?
    idsArrayLength - 1 :
    currentIdIndex - 1

  const nextIdIndex = currentIdIndex === idsArrayLength - 1 ?
    0 :
    currentIdIndex + 1

  return {
    prevId: idsArray[prevIdIndex],
    nextId: idsArray[nextIdIndex],
  }
}

export default function ArtpieceSwitcher({ category, id }) {
  const query = findQuery(category)
  const { data } = useQuery(query)

  const arpiecesIds = data && data[category].map(({ id }) => id)

  const nextPrevIds = arpiecesIds && getPrevAndNextId(arpiecesIds, id)

  return (
    <div className={styles.artpieceSwitcher}>
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
    </div>
  )
}

ArtpieceSwitcher.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string,
}
