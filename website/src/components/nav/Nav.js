import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import cx from 'classnames'

import styles from './Nav.module.scss'

export default function Nav({ color, orientation }) {
  return (
    <nav
      className={
        cx(styles.nav,
            { [styles.vertical]: orientation === 'vertical' },
            { [styles.horizontal]: orientation === 'horizontal' },
            { [styles.white]: color === 'white' },
        )
      }
    >
      <Link className={styles.navItem} to='/'>
        Home
      </Link>
      <Link className={styles.navItem} to='/animations'>
        Animations
      </Link>
      <Link className={styles.navItem} to='/virtual-tours'>
        Virtual Tours
      </Link>
      <Link className={styles.navItem} to='/visualizations'>
        Visualizations
      </Link>
      <Link className={styles.navItem} to='/'>
        Contact
      </Link>
    </nav>
  )
}

Nav.propTypes = {
  color: PropTypes.string,
  orientation: PropTypes.string,
}
