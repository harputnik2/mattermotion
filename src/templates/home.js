import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'
import {Hero} from './home/hero'
import {About} from './home/about'

export const HomePageTemplate = ({
  content,
}) => (
  <div className="content">
    <Hero />
    <About content={content} />
  </div>
)

HomePageTemplate.propTypes = {
  content: PropTypes.string,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        content = {frontmatter.content}
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
        content
      }
    }
  }
`
