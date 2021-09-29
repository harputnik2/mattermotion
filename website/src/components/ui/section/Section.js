import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

export default function Section({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        { children }
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}
