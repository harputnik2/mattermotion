import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const VISUALIZATION = gql`
  query GetVisualization($id: ID!) {
    visualization(id: $id) {
      id
      name
      description
      image {
        url
      }
    }
  }
`

export default function Visualization() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(
      VISUALIZATION,
      {
        variables: { id: id },
      },
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h3>{data.visualization.name}</h3>
      <p>{data.visualization.description}</p>
      <img src={`http://localhost:1337${data.visualization.image.url}`} alt='dom' />
    </div>
  )
}
