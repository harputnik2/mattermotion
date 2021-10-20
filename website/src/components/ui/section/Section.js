import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './Section.module.scss'

export default function Section({ children, theme }) {
  return (
    <section
      className={
        cx(styles.section,
            { [styles.darkSection]: theme === 'dark' },
            { [styles.sectionAfterDark]: theme === 'sectionAfterDark' },
        )
      }
    >
      <div className={styles.sectionContent}>
        { children }
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
}
