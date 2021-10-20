import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from 'components/nav'

import logo from 'static/logo_icon.svg'

import cx from 'classnames'

import styles from './Header.module.scss'

export default function Header() {
  const location = useLocation()
  const isHomepage = location.pathname === '/'
  return (
    <div className={ cx(styles.header, { [styles.homeHeader]: isHomepage }) }>
      <img src={logo} className={styles.logo} />
      <Nav orientation='horizontal' color={isHomepage ? 'white' : 'black'} />
    </div>
  )
}
