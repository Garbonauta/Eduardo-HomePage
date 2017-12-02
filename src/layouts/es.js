import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/Layout'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'

function getNavigationElements (edges) {
  return edges.map(element => {
    return element.node
  }).sort((a, b) => {
    return a.order - b.order
  })
}

export default function IndexTemplate ({children, data}) {
  const {person, navigation: {edges}} = data
  const navElements = getNavigationElements(edges)
  const url = location.pathname
  const {langs, defaultLangKey} = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  return (
    <div>
      <Helmet>
        <title>{person.fullName}</title>
      </Helmet>
      <Layout
        languages={langsMenu}
        me={person} navElements={navElements}
        socialHeader={'Encuéntrame en:'}>
        {children}
      </Layout>
    </div>
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
