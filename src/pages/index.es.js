import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BlogList from '../components/BlogList/BlogList'
import { removeNodeContentfulArray } from '../utils/utils'
import { pageContent } from '../sharedStyles/styles.module.css'

export default function IndexPage ({data: {site: {siteMetadata: {title: siteTitle}}, me, posts, home}}) {
  return (
    <div className={pageContent}>
      <Helmet>
        <title>{`Inicio | ${siteTitle}`}</title>
      </Helmet>
      <BlogList language='es' posts={removeNodeContentfulArray(posts)}/>
    </div>
  )
}
IndexPage.propTypes = {
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
query HomeEsQuery($locale: String = "es", $me: String = "Eduardo Moreno") {
  site {
    siteMetadata {
      title
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
  posts: allContentfulBlogPost(filter: {author: {eq: $me}, node_locale: {eq: $locale}},
  sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        id
        slug
        title
        author
        category {
          id
          slug
          display
        }
        createdAt
        summary
      }
    }
  }
  home: contentfulHome(node_locale: {eq: $locale}) {
    bannerText
  }
}
`