import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import Observer from 'react-intersection-observer'
import { container } from './styles.module.css'

export default function Comments ({slug, title, url}) {
  return (
    <Observer triggerOnce={true}>
      {inView => inView &&
        <ReactDisqusComments
          className={container}
          shortname={`eduardo-moreno`}
          identifier={slug}
          title={title}
          url={url}/>}
    </Observer>
  )
}
Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
