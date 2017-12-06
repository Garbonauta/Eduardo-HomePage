import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../../components/BlogPost/BlogPost'

export default function blogPost ({ data }) {
  return (
    <BlogPost language={'en'} post={data.contentfulBlogPost}/>
  )
}
blogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPostEsQuery($slug: String!, $node_locale: String = "es") {
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: $node_locale}) {
      title
      author
      category
      createdAt
      content {
        childMarkdownRemark {
          html
        }
      }
      tags {
        id
        slug
        display
      }
    }
  }
`
