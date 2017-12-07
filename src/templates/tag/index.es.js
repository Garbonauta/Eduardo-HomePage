import React from 'react'
import PropTypes from 'prop-types'
import TagPage from '../../components/TagPage/TagPage'

export default function Tag ({data: {contentfulTag}}) {
  return (
    <TagPage data={contentfulTag}/>
  )
}
Tag.propTypes = {
  data: PropTypes.shape({
    contentfulTag: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query TagEsQuery($slug: String!, $node_locale: String = "es") {
    contentfulTag(slug: {eq: $slug}, node_locale: {eq: $node_locale}) {
      slug
      display
      posts {
        id
        slug
        title
        category {
          id
          slug
          display
        }
        createdAt
        summary
        author
      }
    }
  }
`
