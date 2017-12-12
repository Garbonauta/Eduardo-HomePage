import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { TagPage } from 'components'

export default function Tag ({data: {site: {siteMetadata: {title: siteTitle}}, contentfulTag}, pathContext: {langKey, locale, slug}}) {
  return (
    <div>
      <Helmet>
        <title>{`${contentfulTag.display} | ${siteTitle}`}</title>
      </Helmet>
      <TagPage language={langKey} data={contentfulTag}/>
    </div>
  )
}
Tag.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    contentfulTag: PropTypes.object.isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}

export const query = graphql`
  query TagQuery($slug: String!, $locale: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulTag(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      slug
      display
      posts {
        id
        slug
        title
        createdAt
        summary
        author {
          fullName
        }
        tags {
          id
          slug
          display
        }
      }
    }
  }
`
