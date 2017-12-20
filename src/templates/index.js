import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IndexPage } from 'components'
import { getCurrentLanguage } from 'utils/utils'
import { pageContent } from 'sharedStyles/styles.module.css'

export default function index (props) {
  const {data, pathContext, location} = props
  const {site: {siteMetadata: {title: siteTitle, languages: {langs, defaultLangKey}}}} = data
  const pathname = typeof location === 'object' && location.pathname
  const langKey = getCurrentLanguage(langs, defaultLangKey, pathname)
  return (
    <div className={pageContent}>
      <Helmet>
        <title>{`Home | ${siteTitle}`}</title>
      </Helmet>
      <IndexPage
        language={langKey}
        data={data}
        context={pathContext}
        location={location}/>
    </div>
  )
}
index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
    me: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
  }),
  pathContext: PropTypes.shape({
    group: PropTypes.array.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const query = graphql`
query HomeEnQuery($locale: String = "en-US", $me: String = "Eduardo Moreno") {
  site {
    siteMetadata {
      title
      languages {
        defaultLangKey
        langs
      } 
    }
  }
  me: allContentfulPerson(filter: {fullName: {eq: $me}, node_locale: {eq: $locale}}) {
    edges {
      node {
        fullName
        jobTitle
      }
    }
  }
  home: contentfulHome(node_locale: {eq: $locale}) {
    bannerText
  }
}
`
