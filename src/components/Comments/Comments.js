import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

export default function Comments ({slug, title, url}) {
  return (
    <ReactDisqusComments
      shortname={`eduardo-moreno`}
      identifier={slug}
      title={title}
      url={url}/>
  )
}
Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
