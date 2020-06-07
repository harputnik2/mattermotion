import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'

export const VisualizationPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

VisualizationPageTemplate.propTypes = {
  content: PropTypes.string,
}

const VisualizationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VisualizationPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

VisualizationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisualizationPage

export const VisualizationPageQuery = graphql`
  query VisualizationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
