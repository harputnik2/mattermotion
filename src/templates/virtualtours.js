import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'

export const VirtualToursPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

VirtualToursPageTemplate.propTypes = {
  content: PropTypes.string,
}

const VirtualToursPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VirtualToursPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

VirtualToursPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VirtualToursPage

export const VirtualToursPageQuery = graphql`
  query VirtualToursPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
