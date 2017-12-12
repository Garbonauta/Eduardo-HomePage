import React from 'react'
import PropTypes from 'prop-types'
import BlogList from '../BlogList/BlogList'
import { pageContent } from './styles.module.css'
import { sortContentfulArrayByCreateAt } from '../../utils/utils'

export default function TagPage ({language, data: {slug, display, posts}}) {
  sortContentfulArrayByCreateAt(posts)
  return (
    <div className={pageContent}>
      <BlogList language={language} posts={posts}/>
    </div>
  )
}
TagPage.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
}
