import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Loader from 'components/loader'

import { Caption, Section, Row, Column } from 'components/ui'
import Review from './review'

const TESTIMONIALS = gql`
  query Testimonials {
    homepage {
      testimonials {
        review {
          id
          author
          position
          content
          logo {
            url
          }
        }
      }
    }
  }
`

export default function Testimonials() {
  const { loading, error, data } = useQuery(TESTIMONIALS)

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <Section theme='sectionAfterDark'>
        <Row>
          <Column>
            <Caption content='what others say about me' />
          </Column>
        </Row>
        <Row>
          {data.homepage.testimonials.review.map((review) => (
            <Column key={review.id}>
              <Review
                author={review.author}
                position={review.position}
                content={review.content}
                logo={review.logo.url}
              />
            </Column>
          ))}
        </Row>
      </Section>
    </>
  )
}
