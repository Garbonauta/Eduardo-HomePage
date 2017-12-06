import React from 'react'
import PropTypes from 'prop-types'
import BlogList from '../BlogList/BlogList'
import { pageContent } from './styles.module.css'

export default function TagPage ({data: {slug, display, posts}}) {
  return (
    <div className={pageContent}>
      <BlogList language={'en'} posts={posts}/>
    </div>
  )
}
TagPage.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
}
