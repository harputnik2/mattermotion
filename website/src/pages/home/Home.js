import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, About, WhatWeDo } from 'components/home'
import { useQuery, gql } from '@apollo/client'

import styles from './Home.module.scss'

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

export default function Home() {
  const { loading, error, data } = useQuery(VISUALIZATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <WhatWeDo />
      {data.visualizations.map((visualization) => (
        <div key={visualization.id}>
          <h3>{visualization.name}</h3>
          <p>{visualization.description}</p>
          <Link to={`/visualizations/${visualization.id}`}>see more</Link>
        </div>
      ))}
    </div>
  )
}
