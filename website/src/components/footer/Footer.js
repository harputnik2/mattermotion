import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Column } from 'components/ui'
import Nav from 'components/nav'

import logo from 'static/logo.svg'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Row forceMobileColumns={true}>
        <Column rowLimit={3}>
          <div className={styles.logo}>
            <Link to='/' title='Logo'>
              <img src={logo} alt='Matter Motion' />
            </Link>
          </div>
        </Column>
        <Column rowLimit={3}>
          <Nav orientation='vertical' color='white' />
        </Column>
        <Column></Column>
      </Row>
    </div>
  )
}
