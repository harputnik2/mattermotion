import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'

export const PricingPageTemplate = ({
  content,
}) => (
  <div className="content">
    {content}
  </div>
)

PricingPageTemplate.propTypes = {
  content: PropTypes.string,
}

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PricingPageTemplate
        content = {frontmatter.content}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const PricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content
      }
    }
  }
`
