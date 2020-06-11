import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'
import Features from './components/Features'

export const AnimationPageTemplate = ({
  description
}) => (
  <div>
    <div className="content">
      {description}
    </div>
  </div>
)

AnimationPageTemplate.propTypes = {
  description: PropTypes.string,
  animations: PropTypes.array,
}

const AnimationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AnimationPageTemplate
        description = {frontmatter.description}
        animations = {frontmatter.animations}
      />
    </Layout>
  )
}

AnimationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AnimationPage

export const AnimationPageQuery = graphql`
  query AnimationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        year
        title
        description
      }
    }
  }
`
