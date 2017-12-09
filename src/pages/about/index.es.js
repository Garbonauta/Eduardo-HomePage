import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function About ({data: {site: {siteMetadata: {title: siteTitle}}}}) {
  return (
    <div>
      <Helmet>
        <title>{`Sobre Mí | ${siteTitle}`}</title>
      </Helmet>
      <div>{'Placeholder'}</div>
    </div>
  )
}
About.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const query = graphql`
query AboutEsQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
