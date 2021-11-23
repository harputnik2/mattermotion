import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { Button } from 'components/ui'
import Loader from 'components/loader'

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

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>

  return (
    <>
      <Loader loaded={!loading} />
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video muted={true} autoPlay={true} loop>
            <source
              src={data.homepage.hero.hero_video.url}
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroSlogan}>{data.homepage.hero.slogan}</h1>
          <div className={styles.heroButtons}>
            <Button content='see what we do' />
            <Button content='lets work together' />
          </div>
        </div>
      </section>
    </>
  )
}
