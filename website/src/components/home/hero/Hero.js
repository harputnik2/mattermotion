import React from 'react'
import { useQuery, gql } from '@apollo/client'

import styles from './Hero.module.scss'

const HERO = gql`
  query GetHero {
    homepage {
      hero {
        slogan
        hero_video {
          url
        }
        hero_poster {
          url
        }
      }
    }
  }
`

export default function Hero() {
  const { loading, error, data } = useQuery(HERO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <video muted={true} autoPlay={true} loop>
          <source src={`http://localhost:1337${data.homepage.hero.hero_video.url}`} type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroSlogan}>{data.homepage.hero.slogan}</h1>
        <div className={styles.heroButtons}>
          <button className={styles.heroButton}>
            <span>
              see what we do
            </span>
          </button>
          <button className={styles.heroButton}>
            <span>
              lets work together
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
