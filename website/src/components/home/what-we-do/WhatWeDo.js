import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { Caption, Section } from 'components/ui'

const WHATWEDO = gql`
  query GetWhatWeDo {
    homepage {
      what_we_do {
        category {
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
    }
  }
`

export default function WhatWeDo() {
  const { loading, error, data } = useQuery(WHATWEDO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Section>
      <Caption content='what we do' />
      {data.homepage.what_we_do.category.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
        </div>
      ))}
    </Section>
  )
}
