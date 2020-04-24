import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const VisualizationsPageTemplate = ({
  content,
  visualization
}) => (
  <div>
    <div className="content">
      {content}
    </div>
    <Features gridItems={visualization} />
  </div>
)

VisualizationsPageTemplate.propTypes = {
  content: PropTypes.string,
  visualization: PropTypes.array,
}

const VisualizationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VisualizationsPageTemplate
        content = {frontmatter.content}
        visualization = {frontmatter.visualization}
      />
    </Layout>
  )
}

VisualizationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisualizationsPage

export const VisualizationsPageQuery = graphql`
  query VisualizationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
        visualization {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
