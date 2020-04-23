import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AnimationsPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

AnimationsPageTemplate.propTypes = {
  content: PropTypes.string,
}

const AnimationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AnimationsPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

AnimationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AnimationsPage

export const AnimationsPageQuery = graphql`
  query AnimationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
