import React from 'react'
import PropTypes from 'prop-types'
import BlogList from '../components/BlogList/BlogList'
import { removeNodeContentfulArray } from '../utils/utils'
import { pageContent } from '../sharedStyles/styles.module.css'

export default function IndexPage ({data: {me, posts, home}}) {
  return (
    <div className={pageContent}>
      <BlogList language='en' posts={removeNodeContentfulArray(posts)}/>
    </div>
  )
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    me: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
  }),
}

export const query = graphql`
query HomeEnQuery($locale: String = "en-US", $me: String = "Eduardo Moreno") {
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
