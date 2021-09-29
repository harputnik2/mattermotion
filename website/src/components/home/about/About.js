import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Section>
      <Row>
        <Column>
          <Caption content='about us' />
          <ReactMarkdown>{data.homepage.about.part_1}</ReactMarkdown>
        </Column>
        <Column>
          <ReactMarkdown>{data.homepage.about.part_2}</ReactMarkdown>
        </Column>
      </Row>
    </Section>
  )
}
