import React from 'react'
import { Hero, About, WhatWeDo, Contact, Testimonials } from './sections'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <WhatWeDo />
      <Contact />
      <Testimonials />
    </div>
  )
}
