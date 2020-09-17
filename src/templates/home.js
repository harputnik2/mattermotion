import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'
import {Hero} from './home/hero'
import {About} from './home/about'
import {WhatWeDo} from './home/whatwedo'
import {Contact} from './home/contact'
import {Testimonials} from './home/testimonials'

export const HomePageTemplate = ({
  about,
  categories,
}) => (
  <div className="content">
    <Helmet>
      <html lang="en" className="homepage" />
    </Helmet>
    <Hero />
    <About content={about.content} />
    <WhatWeDo categories={categories} />
    <Contact content={"fdgdh"} />
    <Testimonials content={"weteryre"} />
  </div>
)

HomePageTemplate.propTypes = {
  about: PropTypes.object,
  categories: PropTypes.object,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        about = {frontmatter.about}
        categories = {frontmatter.categories}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        about {
          content
          title
        }
        categories {
          animations {
            teaser
            minature {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
