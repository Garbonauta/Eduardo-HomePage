import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CategoryPage from '../../components/CategoryPage/CategoryPage'

export default function Category ({data: {site: {siteMetadata: {title: siteTitle}}, contentfulCategory}}) {
  return (
    <div>
      <Helmet>
        <title>{`${contentfulCategory.display} | ${siteTitle}`}</title>
      </Helmet>
      <CategoryPage language={'en'} data={contentfulCategory}/>
    </div>
  )
}
Category.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    contentfulCategory: PropTypes.object.isRequired,
  }).isRequired,
}

export const query = graphql`
  query CategoryEnQuery($slug: String!, $node_locale: String = "en-US") {
    site {
      siteMetadata {
        title
      }
    }
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
