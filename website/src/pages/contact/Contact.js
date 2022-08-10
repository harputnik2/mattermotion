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
    <div className={styles.contact}>
      <div className={styles.contactInvitation}>
        <h3 className={styles.contactInvitationHeading}>
          Have an inquiry?
        </h3>
      </div>
      <Section>
        <Row>
          <Column>
            <Caption content='contact me'/>
            <div className={styles.contactDetails}>
              <p className={styles.contactLabel}>
                email
              </p>
              <h4>
                { data.homepage.contact.email }
              </h4>
            </div>
          </Column>
          <Column>
            <Caption content='leave a message' />
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
              <div className={styles.formButton}>
                <Button
                  type='submit'
                  content='send message'
                  color='dark'
                />
              </div>
            </form>
          </Column>
        </Row>
      </Section>
    </div>
  )
}
