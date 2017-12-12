import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { BlogPost } from 'components'

export default function blogPost ({data: {site, contentfulBlogPost}, pathContext: {langKey, locale, slug}}) {
  return (
    <div>
      <Helmet>
        <title>{`${contentfulBlogPost.title} | ${site.siteMetadata.title}`}</title>
      </Helmet>
      <BlogPost language={langKey} site={site} post={contentfulBlogPost}/>
    </div>
  )
}
blogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    contentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export const query = graphql`
  query BlogPostQuery($slug: String!, $locale: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: $locale}) {
      slug
      title
      author {
        fullName
      }
      createdAt
      summary
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
