import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Loader from 'components/loader'
import ArtpieceSwitcher from 'components/artpiece-switcher'
import FullscreenOverlay from 'components/fullscreen-overlay'
// import FullscreenButton from 'components/fullscreen-button'

import { settings, propsSettings } from './settings'
import styles from './Artpiece.module.scss'

export default function Artpiece({ category }) {
  const [fullscreen, setFullscreen] = useState(false)
  const { id } = useParams()

  const {
    artpieceQuery,
    artpieceCategory,
    ArtpieceComponent,
  } = settings(category)

  const { loading, error, data } = useQuery(
      artpieceQuery,
      {
        variables: { id: id },
      },
  )

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  const artpieceProps = propsSettings(category, data)

  return (
    <>
      <Loader loaded={!loading} />
      <div className={styles.artpiecePage}>
        <div className={styles.artpieceDetails}>
          <h6>{data[artpieceCategory].name}</h6>
          <p>{data[artpieceCategory].description}</p>
        </div>
        <div className={styles.artpiecePreview}>
          <ArtpieceComponent {...artpieceProps} />
        </div>
        <ArtpieceSwitcher category={category} id={id} />
        {/* <FullscreenButton setFullscreen={setFullscreen} /> */}
      </div>
      {fullscreen &&
        <FullscreenOverlay setFullscreen={setFullscreen}>
          <ArtpieceComponent {...artpieceProps} />
        </FullscreenOverlay>
      }
    </>
  )
}

Artpiece.propTypes = {
  category: PropTypes.string,
}
