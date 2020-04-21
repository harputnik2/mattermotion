import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const VisualisationsPageTemplate = ({
  visualisations,
}) => (
  <div className="content">
    {visualisations.map(item => (
      <p>{item.text}</p>
    ))}
  </div>
)

VisualisationsPageTemplate.propTypes = {
  visualisations: PropTypes.array,
}

const VisualisationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VisualisationsPageTemplate
        visualisations={frontmatter.visualisations}
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
      visualisations {
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
      }
    }
  }
`
