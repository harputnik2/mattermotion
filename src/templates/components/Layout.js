import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import './all.scss'
import {
  androidChrome192x192,
  androidChrome512x512,
  appleTouchIcon,
  favicon16x16,
  favicon32x32,
  favicon,
  safariPinnedTab
} from './head'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en"/>
        <title>Matter Motion | Architectural Visualizations, Animations and Virtual Tours</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={description} />

        <link rel="icon" type="image/x-icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
        <link rel="icon" type="image/png" href={androidChrome192x192} sizes="192x192" />
        <link rel="icon" type="image/png" href={androidChrome512x512} sizes="512x512" />
        <link rel="mask-icon" href={safariPinnedTab} color="#ff4400" />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Matter Motion | Architectural Visualizations, Animations and Virtual Tours" />
        <meta property="og:url" content="http://mattermotion.com" />
        <meta property="og:image" content={`${withPrefix('/')}img/logo.svg`} />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
