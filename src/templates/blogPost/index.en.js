import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../../components/BlogPost/BlogPost'

export default function blogPost ({data: {site, contentfulBlogPost}}) {
  return (
    <BlogPost language={'en'} site={site} post={contentfulBlogPost}/>
  )
}
blogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    contentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query BlogPostEnQuery($slug: String!, $node_locale: String = "en-US") {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: $node_locale}) {
      slug
      title
      author
      category {
        id
        slug
        display
      }
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
