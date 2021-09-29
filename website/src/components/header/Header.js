import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from 'static/logo_icon.svg'

import cx from 'classnames'

import styles from './Header.module.scss'

export default function Header() {
  const location = useLocation()
  const isHomepage = location.pathname === '/'
  return (
    <div className={ cx(styles.header, { [styles.homeHeader]: isHomepage }) }>
      <img src={logo} className={styles.logo} />
      <nav className={styles.nav}>
        <Link className={styles.navItem} to='/'>
          Home
        </Link>
        <Link className={styles.navItem} to='/visualizations/1'>
          Visualizations
        </Link>
        <Link className={styles.navItem} to='/'>
          Contact
        </Link>
      </nav>
    </div>
  )
}
