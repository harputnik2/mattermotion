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
  about
}) => (
  <div className="content">
    <Helmet>
      <html lang="en" className="homepage" />
    </Helmet>
    <Hero />
    <About content={about.content} />
    <WhatWeDo content={"dsfdsfsdfds"} />
    <Contact content={"fdgdh"} />
    <Testimonials content={"weteryre"} />
  </div>
)

HomePageTemplate.propTypes = {
  about: PropTypes.object,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        about = {frontmatter.about}
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
      }
    }
  }
`

// export const HomePageQuery = graphql`
//   query HomePage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         about {
//           content
//           title
//         }
//         hero {
//           mainHeadline
//           motto
//         }
//         whatwedo {
//           animations {
//             sample
//             teaser
//           }
//           virtualtours {
//             sample
//             teaser
//           }
//           visualizations {
//             sample
//             teaser
//           }
//         }
//         whatotherssay {
//           author
//           content
//           logo
//         }
//       }
//     }
//   }
// `
