import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IndexPage } from 'components'
import { pageContent } from 'sharedStyles/styles.module.css'

export default function index ({data}) {
  const {site: {siteMetadata: {title: siteTitle}}} = data
  return (
    <div className={pageContent}>
      <Helmet>
        <title>{`Home | ${siteTitle}`}</title>
      </Helmet>
      <IndexPage language='en' data={data}/>
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
    posts: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
  }),
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
  posts: allContentfulBlogPost(filter: {node_locale: {eq: $locale}},
  sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        id
        slug
        title
        author {
          fullName
        }
        createdAt
        summary
        tags {
          id
          slug
          display
        }
      }
    }
  }
  home: contentfulHome(node_locale: {eq: $locale}) {
    bannerText
  }
}
`
