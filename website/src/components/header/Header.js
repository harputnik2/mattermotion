import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Nav from 'components/nav'

import logo from 'static/logo_icon.svg'

import cx from 'classnames'

import styles from './Header.module.scss'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false)

  const location = useLocation()
  const isHomepage = location.pathname === '/'

  return (
    <div className={ cx(styles.header, { [styles.homeHeader]: isHomepage }) }>
      <Link to='/' className={styles.logo}>
        <img src={logo} />
      </Link>
      <div className={styles.desktopNav}>
        <Nav orientation='horizontal' color={isHomepage ? 'white' : 'black'} />
      </div>
      <div className={styles.mobileNav}>
        <span
          className={styles.mobileMenuOn}
          onClick={() => setMenuVisible(true)}
        >
          menu
        </span>
        <div className={ cx(
            styles.mobileMenuHolder,
            { [styles.mobileMenuVisible]: menuVisible },
        )}>
          <div className={styles.mobileMenuHeader}>
            <img src={logo} className={styles.mobileMenuLogo} />
            <span
              className={styles.mobileMenuOff}
              onClick={() => setMenuVisible(false)}
            >
              close menu
            </span>
          </div>
          <div className={styles.mobileNavHolder}>
            <Nav
              orientation='vertical'
              color='white'
              setMenuVisible={setMenuVisible}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
