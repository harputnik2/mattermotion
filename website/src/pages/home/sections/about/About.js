import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

import Loader from 'components/loader'

import { Caption, Section, Row, Column } from 'components/ui'

const ABOUT = gql`
  query GetAbout {
    homepage {
      about {
        part_1
        part_2
      }
    }
  }
`

export default function About() {
  const { loading, error, data } = useQuery(ABOUT)

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <Section>
        <Row>
          <Column>
            <Caption content='about me' />
            <ReactMarkdown>{data.homepage.about.part_1}</ReactMarkdown>
          </Column>
          <Column>
            <ReactMarkdown>{data.homepage.about.part_2}</ReactMarkdown>
          </Column>
        </Row>
      </Section>
    </>
  )
}
