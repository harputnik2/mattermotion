import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from './components/Layout'
import Features from './components/Features'


const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.year})
    </Link>
  </div>
)

const VisualizationsPageTemplate = ({
  edges
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.year) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <div>{Posts}</div>
}

VisualizationsPageTemplate.propTypes = {
  path: PropTypes.string,
  year: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  visualization: PropTypes.array,
}

const VisualizationsPage = ({ data }) => {

  const edges = data.allMarkdownRemark;
  return (
    <Layout>
      <VisualizationsPageTemplate edges={edges} />
    </Layout>
  )
}

VisualizationsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisualizationsPage

export const VisualizationsPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___year] }) {
      edges {
        node {
          id
          frontmatter {
            path
            year
            title
            description
          }
        }
      }
    }
  }
`
