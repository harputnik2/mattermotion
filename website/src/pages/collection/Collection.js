import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client'

import Loader from 'components/loader'
import CollectionCard from 'components/collection-card'
import { Row, Column } from 'components/ui'

import { categories } from 'consts'
import styles from './Collection.module.scss'

const VISUALIZATIONS = gql`
  query GetVisualizations {
    visualizations {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const ANIMATIONS = gql`
  query GetAnimations {
    animations {
      id
      name
      description
      animation {
        url
      }
      poster {
        url
      }
    }
  }
`

const VIRTUAL_TOURS = gql`
  query GetVirtualTours {
    virtualTours {
      id
      name
      description
      tour_url
      poster {
        url
      }
    }
  }
`

export default function Collection({ category }) {
  const query = category === categories.VISUALIZATIONS ?
    VISUALIZATIONS :
    category === categories.ANIMATIONS ?
      ANIMATIONS :
      VIRTUAL_TOURS

  const { loading, error, data } = useQuery(query)

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <div className={styles.collectionPage}>
        <h4 className={styles.collectionPageHeader}>
          {category.replace(/([A-Z])/g, ' $1')}
        </h4>
        <Row padding='small'>
          {data[category].map((artpiece) => (
            <Column key={artpiece.id} padding='small' rowLimit={3}>
              <CollectionCard
                id={artpiece.id}
                title={artpiece.name}
                description={artpiece.description}
                image={
                  artpiece.image ? artpiece.image.url : artpiece.poster.url
                }
                category={category}
              />
            </Column>
          ))}
        </Row>
      </div>
    </>
  )
}

Collection.propTypes = {
  category: PropTypes.string,
}
