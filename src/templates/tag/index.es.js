import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TagPage from '../../components/TagPage/TagPage'

export default function Tag ({data: {site: {siteMetadata: {title: siteTitle}}, contentfulTag}}) {
  return (
    <div>
      <Helmet>
        <title>{`${contentfulTag.display} | ${siteTitle}`}</title>
      </Helmet>
      <TagPage language='es' data={contentfulTag}/>
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
}

export const query = graphql`
  query TagEsQuery($slug: String!, $node_locale: String = "es") {
    site {
      siteMetadata {
        title
      }
    }
    contentfulTag(slug: {eq: $slug}, node_locale: {eq: $node_locale}) {
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
      }
    }
  }
`
