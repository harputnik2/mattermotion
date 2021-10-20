import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import logo from 'static/logo.gif'

import styles from './Loader.module.scss'

export default function Loader({ loaded }) {
  return (
    <div
      className={
        cx(styles.loader,
            { [styles.loaded]: loaded },
        )
      }
    >
      <div className={styles.loaderImg}>
        <img src={logo} alt='loader' />
      </div>
    </div>
  )
}

Loader.propTypes = {
  loaded: PropTypes.boolean,
}
