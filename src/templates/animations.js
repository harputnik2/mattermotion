import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './components/Layout'
import Video from './components/Video'

export const AnimationsPageTemplate = ({
  content,
  animation
}) => (
  <div>
    <div className="content">
      {content}
    </div>

    {animation.map((item, index) => (
      <div key={item.index}>
        <Video
          videoSrcURL={item.video.publicURL}
          videoTitle={item.video.description}
        />
      </div>
    ))}
  </div>
)

AnimationsPageTemplate.propTypes = {
  content: PropTypes.string,
  animation: PropTypes.array,
}

const AnimationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AnimationsPageTemplate
        content = {frontmatter.content}
        animation = {frontmatter.animation}
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
        animation {
          video {
            publicURL
          }
          description
        }
      }
    }
  }
`
