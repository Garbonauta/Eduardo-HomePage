import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BlogPost from '../../components/BlogPost/BlogPost'

export default function blogPost ({data: {site, contentfulBlogPost}}) {
  return (
    <div>
      <Helmet>
        <title>{`${contentfulBlogPost.title} | ${site.siteMetadata.title}`}</title>
      </Helmet>
      <BlogPost language={'es'} site={site} post={contentfulBlogPost}/>
    </div>
  )
}
blogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    contentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query BlogPostEsQuery($slug: String!, $node_locale: String = "es") {
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