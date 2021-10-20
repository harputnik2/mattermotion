import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Loader from 'components/loader'

import { Caption, Section, Row, Column, Button } from 'components/ui'

import styles from './Contact.module.scss'

const CONTACT = gql`
  query GetContact {
    homepage {
      contact {
        email
        phone
      }
    }
  }
`

export default function Contact() {
  const { loading, error, data } = useQuery(CONTACT)

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <Section theme='dark'>
        <Row>
          <Column>
            <Caption content='contact' onDark={true} />
            <div className="contact-details--field">
              <p className="label">
                email
              </p>
              <h4>
                { data.homepage.contact.email }
              </h4>
            </div>
            <div className="contact-details--field">
              <p className="label">
                phone
              </p>
              <h4>
                { data.homepage.contact.phone }
              </h4>
            </div>
          </Column>
          <Column>
            <Caption content='lets work together' onDark={true} />
            <form
              action='https://formsubmit.co/5f5295a4e46d66df3c22df983d1294b9'
              method='POST'
              className={styles.form}
            >
              <div className={styles.labeledField}>
                <input type='text' name='name' required />
                <label htmlFor='name'>Name:</label>
              </div>
              <div className={styles.labeledField}>
                <input type='email' name='email' required />
                <label htmlFor='email'>Email:</label>
              </div>
              <div className={styles.labeledField}>
                <textarea name='message' required />
                <label htmlFor='message'>Message:</label>
              </div>
              <Button type='submit' content='send message' />
            </form>
          </Column>
        </Row>
      </Section>
    </>
  )
}
