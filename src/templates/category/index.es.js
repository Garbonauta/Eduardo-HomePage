import React from 'react'
import PropTypes from 'prop-types'
import CategoryPage from '../../components/CategoryPage/CategoryPage'

export default function Category ({data: {contentfulCategory}}) {
  return (
    <CategoryPage data={contentfulCategory}/>
  )
}
Category.propTypes = {
  data: PropTypes.shape({
    contentfulCategory: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query CategoryEsQuery($slug: String!, $node_locale: String = "es") {
    contentfulCategory(slug: {eq: $slug}, node_locale: {eq: $node_locale}) {
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
