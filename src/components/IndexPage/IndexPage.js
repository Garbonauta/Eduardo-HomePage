import React from 'react'
import PropTypes from 'prop-types'
import { BlogList } from 'components'
import { removeNodeContentfulArray } from 'utils/utils'

export default function IndexPage ({language, data: {site, me, posts: {edges}, home}}) {
  return (
    <BlogList language={language} posts={removeNodeContentfulArray(edges)}/>
  )
}
IndexPage.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
    home: PropTypes.object.isRequired,
  }).isRequired,
}
