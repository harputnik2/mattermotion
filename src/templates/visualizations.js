import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const visualizationsPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

visualizationsPageTemplate.propTypes = {
  content: PropTypes.string,
}

const visualizationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <visualizationsPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

visualizationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default visualizationsPage

export const visualizationsPageQuery = graphql`
  query visualizationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
