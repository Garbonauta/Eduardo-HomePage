import React from 'react'
import PropTypes from 'prop-types'
import { BlogList, Pagination } from 'components'
import { removeNodeContentfulArray, getBasePath } from 'utils/utils'

export default function IndexPage (
  {
    language,
    data: {site, me, home},
    context: {group: posts, index, first, last, pageCount},
    location: {pathname},
  }) {
  return (
    <div>
      <BlogList language={language} posts={removeNodeContentfulArray(posts)}/>
      {pageCount > 1 &&
      <Pagination
        current={index}
        first={first}
        last={last}
        pageCount={pageCount}
        baseUrl={getBasePath(pathname)}/>}
    </div>
  )
}
IndexPage.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
  }).isRequired,
  context: PropTypes.shape({
    group: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
