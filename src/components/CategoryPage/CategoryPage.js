import React from 'react'
import PropTypes from 'prop-types'
import BlogList from '../BlogList/BlogList'
import { pageContent } from './styles.module.css'
import { sortContentfulArrayByCreateAt } from '../../utils/utils'

export default function CategoryPage ({data: {slug, display, posts}}) {
  sortContentfulArrayByCreateAt(posts)
  return (
    <div className={pageContent}>
      <BlogList language={'en'} posts={posts}/>
    </div>
  )
}
CategoryPage.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.array.isRequired,
      createdAt: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
}
