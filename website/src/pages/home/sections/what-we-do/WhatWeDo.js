import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Loader from 'components/loader'

import { Caption, Section, Row, Column } from 'components/ui'
import CategoryCard from './category-card'

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

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <div id='whatwedo' />
      <Section>
        <Row>
          <Column>
            <Caption content='what I do' />
            {data.homepage.what_we_do.category.map((category) => (
              <CategoryCard
                key={category.id}
                categoryName={category.name}
                categoryTeaser={category.description}
                categoryVideo={category.animation.url}
              />
            ))}
          </Column>
        </Row>
      </Section>
    </>
  )
}
