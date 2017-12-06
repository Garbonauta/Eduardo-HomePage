import React from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout'

export default function IndexTemplate ({children, data}) {
  return (
    <Layout data={data}>
      {children}
    </Layout>
  )
}
IndexTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
query AppEsQuery {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  person: contentfulPerson(fullName: {eq: "Eduardo Moreno"}) {
    fullName
    github
    linkedIn
  }
  navigation: allContentfulNavigation(filter: {node_locale: {eq: "es"}}) {
    edges {
      node {
        node_locale
        title
        slug
        displayText
        order
      }
    }
  }
}
`
