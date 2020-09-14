import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'
import Features from './components/Features'

export const VisualizationPageTemplate = ({
  description,
  visualizations
}) => (
  <div>
    <div className="content">
      {description}
    </div>
    <Features gridItems={visualizations} />
  </div>
)

VisualizationPageTemplate.propTypes = {
  description: PropTypes.string,
  visualizations: PropTypes.array,
}

const VisualizationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VisualizationPageTemplate
        description = {frontmatter.description}
        visualizations = {frontmatter.visualizations}
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
        year
        title
        description
        visualizations {
          image {
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
`
