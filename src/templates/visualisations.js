import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const VisualisationsPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

VisualisationsPageTemplate.propTypes = {
  content: PropTypes.string,
}

const VisualisationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VisualisationsPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

VisualisationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisualisationsPage

export const visualisationsPageQuery = graphql`
  query VisualisationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
