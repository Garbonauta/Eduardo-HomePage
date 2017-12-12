import React from 'react'
import PropTypes from 'prop-types'
import { BlogList } from 'components'
import { sortContentfulArrayByCreateAt } from 'utils/utils'
import { pageContent } from './styles.module.css'

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
  data: PropTypes.object.isRequired,
}
